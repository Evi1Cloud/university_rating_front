import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const tableData = [
  { param: 'A11', name: 'Параметр 1', value: 2.3 },
  { param: 'A12', name: 'Параметр 2', value: 3.0 },
  { param: 'A13', name: 'Параметр 3', value: 1.7 },
  { param: 'A21', name: 'Параметр 4', value: 1.1 },
  { param: 'A22', name: 'Параметр 5', value: 7.9 },
  { param: 'A23', name: 'Параметр 6', value: 9.9 },
  { param: 'A24', name: 'Параметр 7', value: 5.3 },
  { param: 'A25', name: 'Параметр 8', value: 1.2 },
  { param: 'A26', name: 'Параметр 9', value: 3.3 },
  { param: 'A31', name: 'Параметр 10', value: 8.7 },
  { param: 'A32', name: 'Параметр 11', value: 2.1 },
  { param: 'A33', name: 'Параметр 12', value: 1.1 },
];

const radarData = [
  { param: 'A11', value: 2.3 },
  { param: 'A12', value: 3.0 },
  { param: 'A13', value: 1.7 },
  { param: 'A21', value: 1.1 },
  { param: 'A22', value: 7.9 },
  { param: 'A23', value: 9.9 },
  { param: 'A24', value: 5.3 },
  { param: 'A25', value: 1.2 },
  { param: 'A26', value: 3.3 },
];

const lineData = [
  { year: '2024', value1: 30, value2: 0 },
  { year: '2025', value1: 60, value2: 55 },
  { year: '2026', value1: 35, value2: 65 },
];

export default function AnalysisPage() {
  return (
    <div className="app-container">
      <div className="page-content">
        {/* Верхний блок: таблица и радар */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div className="card" style={{ padding: '16px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Название</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(item => (
                  <tr key={item.param}>
                    <td>{item.param}</td>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RadarChart outerRadius={90} width={300} height={300} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="param" />
              <PolarRadiusAxis />
              <Radar name="Параметры" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
            </RadarChart>
          </div>
        </div>

        {/* Нижний блок: линейный график */}
        <div className="card" style={{ padding: '16px', marginBottom: '20px' }}>
          <LineChart width={800} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value1" stroke="#00bfff" />
            <Line type="monotone" dataKey="value2" stroke="#32cd32" />
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

