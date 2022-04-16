import React, { useEffect,  useState } from 'react'
import Navbar from './components/navbar/Navbar'
import RoutesComp from './components/navbar/Routes'
import Body from './components/body/Body'
import Finished from './components/body/Finished'
import './App.css';
import Process from './components/body/Process';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Context } from './components/context/contect'


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify([{
        id: 1, title: 'first task', process: false, checked: false, finished: false
      }]))
    }

    if (localStorage.getItem('data')) {
      setData(
        JSON.parse(localStorage.getItem('data'))
      )
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])


  function toStorage(array) {
    localStorage.setItem('data', JSON.stringify(array))
  }
  function update(id) {
    let datafiltered = data.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked
        item.process = false;
      }
      return item
    })
    setData(datafiltered)
    toStorage(datafiltered)
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
    toStorage(dataa)

  }
  function removeToProcess(id) {
    let dataa = data.map((item) => {
      if (item.id === id) {
        item.process = false;

      }
      return item
    })
    setData(dataa)
    toStorage(dataa)

  }
  function removeTodo(id) {
    let dataUpdated = data.filter((item) => {
      return item.id !== id;
    })
    setData(dataUpdated)
    toStorage(dataUpdated)

  }


  /*====================================== */
  function commitToState(current) {
    if (current.value.trim() !== '') {
      setData([...data, {
        id: data.length + 1, title: current.value, process: false, checked: false, finished: false
      }])
      console.log(data);
      current.value = null;
    }

  }

  /*====================================== */

  return (
    <Context.Provider value={{
      data, commitToState, setData,
      update, saveToProcess, removeTodo, removeToProcess
    }}>
      <BrowserRouter>
        <Navbar>
          <RoutesComp />
        </Navbar>

        <div className='wrapper'>

          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/finished' element={<Finished />} />
            <Route path='/processing' element={<Process />} />
            <Route path='*' element={<Body />} />
          </Routes>
        </div >

      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
