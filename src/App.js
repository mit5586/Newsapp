import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const pageSize = 15

  const [progress, setProgress] = useState(0)
  const apiKey = "7d11225639b24931a591b24e1adae0a5"

  const changeProgress = (progress)=>{
    setProgress(progress)
  }
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={changeProgress} key="home" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={changeProgress} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={changeProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News apiKey={apiKey} setProgress={changeProgress} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={changeProgress} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={changeProgress} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={changeProgress} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={changeProgress} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App