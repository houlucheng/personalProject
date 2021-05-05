import React from 'react'

const detailData = [
  {id: '01', content: "你好，中国"},
  {id: '02', content: "你好，晋城"},
  {id: '03', content: "你好，肉肉"}
]
export default function Detail(props) {
  const {id, title} = props.location.state
  let newObj = detailData.find(item=> {
    return item.id === id
  })
  return (
    <div>
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {newObj.content}</li>
      </ul>
    </div>
  )
}
