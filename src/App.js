import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }

  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={this.state.progress}
        />
        <Routes>
          {/* <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="" pageSize={8} country="in" />} /> */}
          {/* <Route exact path="/about" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="about" pageSize={8} country="in" category="general" />} /> */}
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={8} country="in" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={8} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={8} country="in" category="business" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={8} country="in" category="science" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={8} country="in" category="technology" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={8} country="in" category="health" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={8} country="in" category="sports" />} />
        </Routes>
      </div>
    </Router>
    )
  }
}