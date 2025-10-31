import React from 'react';
import Card from '../components/Card';
import YearSelector from '../components/YearSelector';
import ClassSelector from '../components/ClassSelector';
import ParameterInput from '../components/ParameterInput';

const url = 'http://localhost:5000/api/proxy/import';

function InputParametersPage() {
  const [selectedYear, setSelectedYear] = React.useState(2025);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [params, setParams] = React.useState({
    ENa: '', ENb: '', ENc: '', Eb: '', Ec: '',
    b121: '', b122: '', b131: '', b132: '', b211: '', b212: ''
  });

  const parameterNames = Object.keys(params);

  const handleParamChange = (name, value) => {
    setParams(prev => ({ ...prev, [name]: value }));
  };

  const allParamsFilled = parameterNames.every(name => params[name].trim() !== '');

  const handleSubmit = async () => {
    if (!selectedYear) {
      alert('Пожалуйста, выберите год.');
      return;
    }
    if (!selectedClass) {
      alert('Пожалуйста, выберите класс.');
      return;
    }
    if (!allParamsFilled) {
      alert('Пожалуйста, заполните все параметры.');
      return;
    }

    const payload = {
      class: selectedClass,
      data: [
        {
          year: selectedYear,
          ENa: Number(params.ENa),
          ENb: Number(params.ENb),
          ENc: Number(params.ENc),
          Eb: Number(params.Eb),
          Ec: Number(params.Ec),
          beta121: Number(params.b121),
          beta122: Number(params.b122),
          beta131: Number(params.b131),
          beta132: Number(params.b132),
          beta211: Number(params.b211),
          beta212: Number(params.b212)
        }
      ]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log('Данные успешно отправлены:', result);
      alert('Данные успешно отправлены!');
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert('Произошла ошибка при отправке данных. Проверьте консоль.');
    }
  };

  return (
    <div className="input-page-container">
      <div className="input-page-content">
        <Card>
          <div className="header-actions">
            <YearSelector selectedYear={selectedYear} onSelect={setSelectedYear} />
          </div>

          <div className="form-grid">
            <div className="section">
              <h3 className="section-title">Выбор класса</h3>
              <ClassSelector selectedClass={selectedClass} onSelect={setSelectedClass} />
            </div>

            {selectedClass && (
              <div className="section parameters">
                <h3 className="section-title">Параметры</h3>
                <div className="parameters-grid">
                  {parameterNames.map(name => (
                    <ParameterInput
                      key={name}
                      label={name}
                      value={params[name]}
                      onChange={val => handleParamChange(name, val)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="section">
              <button className="btn-submit" onClick={handleSubmit}>
                Составить расчет и отправить
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default InputParametersPage;
