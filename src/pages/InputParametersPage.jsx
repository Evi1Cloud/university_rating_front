import React from 'react';
import Card from '../components/Card';
import YearSelector from '../components/YearSelector';
import ClassSelector from '../components/ClassSelector';
import GroupSelector from '../components/GroupSelector';
import ParameterInput from '../components/ParameterInput';

function InputParametersPage() {
  const [selectedYear, setSelectedYear] = React.useState('2024');
  const [selectedClass, setSelectedClass] = React.useState('Класс А');
  const [selectedGroup, setSelectedGroup] = React.useState('Группа 1');

  const [param1, setParam1] = React.useState('1, 2.2, 3.3, 4.4, 5.5, 1.0, 2.1');
  const [param2, setParam2] = React.useState('1, 2.2,');
  const [param3, setParam3] = React.useState('1, 2.2, 3.3, 4.4, 5.5, 1.0, 2.1, 10, 15');

  return (
    <div className="app-container">
        <div className="page-content">
        <Card>
          <div className="header-actions">
            <YearSelector
              selectedYear={selectedYear}
              onSelect={setSelectedYear}
            />
          </div>

          <div className="form-grid">
            <div className="section">
              <h3>Выбор класса</h3>
              <ClassSelector
                selectedClass={selectedClass}
                onSelect={setSelectedClass}
              />
            </div>

            <div className="section parameters">
              <h3>Параметры</h3>
              <ParameterInput
                label="Параметр 1"
                value={param1}
                onChange={setParam1}
              />
              <ParameterInput
                label="Параметр 2"
                value={param2}
                onChange={setParam2}
              />
              <ParameterInput
                label="Параметр 3"
                value={param3}
                onChange={setParam3}
              />
            </div>

            <div className="section">
              <h3>Выбор группы</h3>
              <GroupSelector
                selectedGroup={selectedGroup}
                onSelect={setSelectedGroup}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default InputParametersPage;
