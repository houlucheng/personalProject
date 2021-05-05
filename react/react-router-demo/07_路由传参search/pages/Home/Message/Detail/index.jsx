import React from 'react'
import qs from 'querystring'

const detailData = [
  {id: '01', content: "你好，中国"},
  {id: '02', content: "你好，晋城"},
  {id: '03', content: "你好，肉肉"}
]
export default function Detail(props) {
  const {search} = props.location
  const {id, title} = qs.parse(search.slice(1))
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
