import React from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import DataManager from './DataManager/DataManager';

function App() {

  DataManager.initDataManager();

  return (
    <div className='App container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Header />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <MainWindow dataManager={DataManager}/> 
        </div>
      </div>
    </div>  
  );
}

export default App;
