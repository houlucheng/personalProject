import React from 'react'
// import { Cascader } from 'antd';
import options from './region'
import { Cascader } from 'rootnet-design'


export default function Login() {

  let obj = [
    {
      label: "季报",
      value: "2",
      children: [
        {
          label: 2023,
          value: '2',
          children: [
            {value: "1", label: "Q1"},  
            {value: "2", label: "Q2"},
            {value: "3", label: "Q3"},
            {value: "4", label: "Q4"}
          ]
        },
        {
          label: 2022,
          value: 2022,
          children: [
            {value: "1", label: "Q1"},
            {value: "2", label: "Q2"},
            {value: "3", label: "Q3"},
            {value: "4", label: "Q4"}
          ]
        },
        {
          label: 2021,
          value: 2021,
          children: [
            {value: "1", label: "Q1"},
            {value: "2", label: "Q2"},
            {value: "3", label: "Q3"},
            {value: "4", label: "Q4"}
          ]
        }
      ]
    }
   
  ]
  
  function onChange(value,label) {
    console.log(value, label);
  }



  return (
    <div>
      <h1>登录</h1>
      <Cascader options={obj} close onChange={onChange} placeholder="Please select" />
    </div>
  )
}
