import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data
const data = [
{
    Day:"Sun",
    hours:1,
    workHours:7

},
{
     Day:"Mon",
    hours:3,
    workHours:5

},
{
Day:"Tue",
    hours:6,
workHours:2,
},
{
    Day:"Wed",
    hours:8,
    workHours:0 ,

},
{
    Day:"Thu",
    hours:2,
    workHours:6 ,

},
{
    Day:"Fri",
    hours:3,
    workHours:5 ,

},
{
    Day:"Fri",
    hours:6,
    workHours:2 ,

},
];

// Chart component
const CombinedChart = () => (
    
  <BarChart width={500} height={200} data={data}
   margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Day" />
    <YAxis />
    <Tooltip />
    <Legend name='hell' />
    <Bar  dataKey="hours" stackId="1" fill="#428df5" />
    <Bar  dataKey="workHours" stackId="1" fill="#abd4ed" />
  
 </BarChart>

);

export default CombinedChart;