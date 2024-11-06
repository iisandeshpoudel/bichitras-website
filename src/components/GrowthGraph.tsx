import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', growth: 20 },
  { month: 'Feb', growth: 35 },
  { month: 'Mar', growth: 45 },
  { month: 'Apr', growth: 60 },
  { month: 'May', growth: 75 },
  { month: 'Jun', growth: 90 },
];

const GrowthGraph = () => {
  return (
    <div className="w-full h-[300px] p-4 bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D8B4FE30" />
          <XAxis dataKey="month" stroke="#D8B4FE" />
          <YAxis stroke="#D8B4FE" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#3C1361',
              border: 'none',
              borderRadius: '8px',
              color: '#D8B4FE',
            }}
          />
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#FFD700"
            strokeWidth={2}
            dot={{ fill: '#FFD700', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthGraph;