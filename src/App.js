import './App.css';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
    }

    componentDidMount() {
      this.getData();
    }

    async getData() {
      const url = `http://localhost:4000/v1/price/getBieuDo?time=2019&provinceCode=ho-chi-minh&districtCode=quan-1&villageCode=phuong-da-kao&category=Bán căn hộ chung cư`;
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({data: res});
      });
    };
  
    render() {
      const { data } = this.state;
  
      return (
        <ResponsiveContainer className="chart" height={300}>
          <LineChart 
           width={600} 
           height={300} 
           data={data}
           margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
          <XAxis dataKey="time"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
         
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }
  
  export default App;