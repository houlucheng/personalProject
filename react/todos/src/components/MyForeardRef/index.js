import React, { forwardRef, useRef, useState, useCallback, useImperativeHandle } from 'react'

const TextInput = forwardRef((props, ref) => {
    const [a, setA] = useState(0)
    const [value, setValue] = useState('')
    const inputRef = useRef();
    console.log(334);
    useImperativeHandle(ref, () => {
        console.log(887);
        return ({
            value: inputRef.current.value
        })
    });
    const changeValue = (e) => {
        console.log(1112);
        setValue(e.target.value);
    }
    return <input ref={inputRef} value={value} onChange={changeValue}></input>
})

export default function MyForeardRef() {
    const [value, setValue] = useState("");
    console.log(6699);

    const inputEl = useCallback(node => {
        if (node !== null) {
            setValue(node.value);
        }
    }, []);

    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        console.log("input值", inputEl.current.value);
        setValue(inputEl.current.value);
    };
    return (
        <>
            <div>
                子组件: <TextInput ref={inputEl}></TextInput>
            </div>
            <div>
                父组件: <input type="text" value={value} onChange={() => { }} />
            </div>
        </>
    );
}
