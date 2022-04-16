import React, { useContext, useRef } from 'react'
import './Body.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { FcProcess } from 'react-icons/fc';

import { Context } from '../context/contect';


function Body() {

  const { data, update, setData, saveToProcess, removeTodo, commitToState } = useContext(Context)
  const ref = useRef()

  return (

    <div className='body'>
      <p id='p'>Список всех заданий</p>
      {data.length > 0 ?
        data.map(item => {
          return (
            <li className='list' key={item.id}>
              <input
                className='inp' type="checkbox"
                checked={item.checked ? 'checked' : ''}
                onClick={() => update(item.id)}

              />
              <p style={{ textDecoration: item.checked ? 'line-through' : '' }}>
                {item.id}.{item.title}
              </p>
              <span className='spanFlex'>
                <button className={item.process ? 'process active' : 'process'} onClick={() => saveToProcess(item.id)}>
                  <FcProcess />
                </button>
                <button className='delete' onClick={() => removeTodo(item.id)}>
                  <AiOutlineDelete />
                </button>
              </span>
            </li>
          )
        })
        :

        <p className='perror'>Нет заданий</p>
      }


      <div className='addTask'>
        <div className="taska">
          <input ref={ref} type="text" onChange={(e) => e.target.value} />
          <button onClick={() => {
            commitToState(ref.current)
          }}>Commit</button>
        </div>

      </div>
    </div>

  )
}

export default Body