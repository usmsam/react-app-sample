import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import RoutesComp from './components/navbar/Routes'
import Body from './components/body/Body'
import Finished from './components/body/Finished'
import './App.css';
import Process from './components/body/Process';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Context } from './components/context/contect'


function App() {
  const [data, setData] = useState([
    { id: 1, title: 'Погулять с собакой', checked: false, process: false, finished: false },
    { id: 2, title: 'Покормить собаку', checked: false, process: false, finished: false },
    { id: 3, title: 'Купить хлеб', checked: false, process: false, finished: false },
    { id: 4, title: 'Поспать :)', checked: false, process: false, finished: false },
    { id: 5, title: 'Поесть', checked: false, process: false, finished: false },
    { id: 6, title: 'Тренровка', checked: false, process: false, finished: false },
    { id: 7, title: 'Кодинг', checked: false, process: false, finished: false },

  ])


  function update(id) {
    let datafiltered = data.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked
        item.process = false;
      }
      return item
    })
    setData(datafiltered)
  }
  function saveToProcess(id) {
    let dataa = data.map((item) => {
      if (item.id === id) {
        item.process = !item.process;
        item.checked = false;
        item.finished = false
      }
      return item
    })
    setData(dataa)
  }
  function removeToProcess(id) {
    let dataa = data.map((item) => {
      if (item.id === id) {
        item.process = false;
      
      }
      return item
    })
    setData(dataa)
  }
  function removeTodo(id) {
    let dataUpdated = data.filter((item) => {
      return item.id !== id;
    })
    setData(dataUpdated)
  }


  return (
    <Context.Provider value={{
      data,
      update, saveToProcess, removeTodo ,removeToProcess
    }}>
      <BrowserRouter>
        <Navbar>
          <RoutesComp />
        </Navbar>

        <div className='wrapper'>

          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/finished' element={<Finished />} />
            <Route path='/processing' element={<Process/>} />
            <Route path='*' element={<Body />} />
          </Routes>
        </div >

      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
