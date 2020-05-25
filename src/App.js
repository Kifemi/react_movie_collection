import React from 'react';
import { BrowserrRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import DataManager, { initDataManager } from './DataManager/DataManager';

function App() {

  let dataManager = new DataManager();
  initDataManager(dataManager);

  return (
    <div className='App container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Header />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <MainWindow movieCollection={dataManager.movieCollection}/> 
        </div>
      </div>
    </div>  
  );
}

export default App;
