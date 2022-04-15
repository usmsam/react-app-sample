import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineStop } from 'react-icons/ai';

import { Context } from '../context/contect';



function Process() {
  const { data,removeToProcess, removeTodo } = useContext(Context)
  let filtered = data.filter((item) => {
    return item.process
  })

  return (
    <div className='body'>

      <p id='p'>Выполняемые задания</p>
      {filtered.length ?
        filtered.map(item => {
          if (item.process) {
            return <li className='list' key={item.id}>
              {/* <input className='inp' type="checkbox" checked={item.checked ? 'checked' : ''} /> */}
              <p style={{ textDecoration: item.checked ? 'line-through' : '' }}>
                {item.id}.  {item.title}
              </p>
              <span className='spanFlex'>
                <button className='process' onClick={() => removeToProcess(item.id)}>
                  <AiOutlineStop />
                </button>
                <button className='process' onClick={() => removeTodo(item.id)}>
                  <AiOutlineDelete />
                </button>

              </span>
            </li>

          } else {
            return null

          }
        })
        :
        <p className='perror'>Нет выполняемых заданий</p>
      }
    </div >
  )
}

export default Process
