import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data
const data = [
{
   TrainingEffectivness:6,
   Satisfaction_Index:3,
    EngagementIndex:6,
},


];

// Chart component
const QualityWorkflowChart = () => (
<div className='flex flex-col justify-center text-center items-center'>
<h1 className='text-center p-2 font-bold'>Quality of Workflow</h1>
  <BarChart width={700} height={500} data={data}
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
    <Bar  dataKey="TrainingEffectivness" stackId="1" fill="#428df5"  />
    <Bar  dataKey="Satisfaction_Index" stackId="2" fill="green"  />
    <Bar  dataKey="EngagementIndex" stackId="3" fill="purple"  />
   
 </BarChart>
</div>

);




export default QualityWorkflowChart;