import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const data = [
  {name: '', uv: 4000, pv: 2400, amt: 2400},
  {name: '1', uv: 3000, pv: 1398, amt: 2210},
  {name: '2', uv: 2000, pv: 9800, amt: 2290},
  {name: '3', uv: 2780, pv: 3908, amt: 2000},
  {name: '4', uv: 1890, pv: 4800, amt: 2181},
  {name: '5', uv: 2390, pv: 3800, amt: 2500},
  {name: '6', uv: 3490, pv: 4300, amt: 2100},
];

class SimpleAreaChart extends Component {
	render () {
    return (
      <AreaChart width={1200} height={450} data={data}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#c12e2a' fill='#d9534f' />
      </AreaChart>
    );
  }
}

export default SimpleAreaChart;
