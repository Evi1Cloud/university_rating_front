import React, { useEffect, useState } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
const url = 'http://localhost:5000/api/proxy/calc';
export default function AnalysisPage() {
  const [calcData, setCalcData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Запрос к API при загрузке страницы
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({})
        });

        if (!response.ok) throw new Error(`Ошибка сети: ${response.status}`);

        const data = await response.json();
        setCalcData(data);
      } catch (err) {
        console.error('Ошибка при получении данных:', err);
        setError('Не удалось получить данные с сервера.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p>{error}</p>;
  if (!calcData.length) return <p>Данных для отображения нет.</p>;

  const firstItem = calcData[0];

  // Таблица: Bxx + totalB внизу
  const tableData = Object.entries(firstItem)
    .filter(([key]) => key.startsWith('B'))
    .map(([key, value]) => ({ param: key, value }));

  // Добавляем totalB в конце таблицы
  tableData.push({ param: 'totalB', value: firstItem.totalB });

  // Радар: только числовые Bxx
  const radarData = Object.entries(firstItem)
    .filter(([key, value]) => key.startsWith('B') && typeof value === 'number')
    .map(([key, value]) => ({ param: key, value }));

  // Линейный график: только totalB
  const lineData = calcData.map(item => ({
    year: item.year,
    totalB: item.totalB
  }));

  return (
    <div className="app-container">
      <div className="page-content">
        {/* Верхний блок: таблица и радар */}
        <div className="grid-top" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div className="card table-card" style={{ padding: '16px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(item => (
                  <tr key={item.param}>
                    <td>{item.param}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card radar-card" style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RadarChart outerRadius={90} width={300} height={300} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="param" />
              <PolarRadiusAxis />
              <Radar name="Bxx" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
            </RadarChart>
          </div>
        </div>

        {/* Нижний блок: линейный график */}
        <div className="card line-card" style={{ padding: '16px', marginBottom: '20px' }}>
          <LineChart width={800} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalB" stroke="#00bfff" />
          </LineChart>
        </div>

        {/* Кнопка сохранения */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#cce5ff',
            color: '#007bff',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Сохранить текущую сессию
          </button>
        </div>
      </div>
    </div>
  );
}
