import React, { useState } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default function Message() {
  let [messageArr] = useState(() => {
    return [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  })
  return (
    <div>
      <ul>
        {
          messageArr.map((item) => {
            return (
              <li key={item.id} >
                <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <Route path="/home/message/detail" component={Detail} />
    </div>

  )
}
