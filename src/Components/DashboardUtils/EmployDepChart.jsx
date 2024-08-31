import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data
const data = [
{
 
    Finance:6,
    HR:3,
    IT: 4,
    Marketing:2, 
    Design:8,
    Management:3
},


];

// Chart component
const EmployDepChart = () => (
<div className='flex flex-col items-center w-full'>
<h1 className='text-center p-2 font-bold'>Employees by departments</h1>
  <BarChart width={600} height={400} data={data}
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
    <Bar  dataKey="Finance" stackId="1" fill="#428df5"  />
    <Bar  dataKey="HR" stackId="2" fill="green"  />
    <Bar  dataKey="IT" stackId="3" fill="purple"  />
    <Bar  dataKey="Marketing" stackId="4" fill="blue"   />
    <Bar  dataKey="Design" stackId="5" fill="cyan"   />
    <Bar  dataKey="Management" stackId="6" fill="#428df5"   />
  
 </BarChart>
</div>

);




export default EmployDepChart