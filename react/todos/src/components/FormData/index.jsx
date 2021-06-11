import React, {useState, useReducer} from 'react'
import {Grid, Form, FormInput} from 'rootnet-edit';

export default function FormList() {
    // const [data, setData] = useState(
    //     {
    //         name: '张三',
    //         age: 18,
    //         sex: '男',
    //         vocation: 'IT',
    //         education: "本科"
    //     }
    // )
    
    const initState = {
        name: '张三',
        age: 18,
        sex: '男',
        vocation: 'IT',
        education: "本科"
    }
    const reducer = (state, action) => {
        const {type, data} = action
        switch(type) {
            case "add":
                return {...state, age: data}
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    const clickHandel = () => {
        // setData({
        //     ...data,
        //     age: 20
        // })
        
        dispatch({type: 'add', data: 20})
    }
    return (
        <>
            <Grid cols={3}>
                <Form  value={state}>
                    <FormInput bind="name" label="姓名" /> 
                    <FormInput bind="age" label="年龄" /> 
                    <FormInput bind="sex" label="性别" /> 
                    <FormInput bind="vocation" label="职业" /> 
                    <FormInput bind="education" label="本科" /> 
                </Form>
            </Grid>
            <button onClick={()=> clickHandel()}>点击</button>
        </>
    )
}
