import React from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import DataManager, { initDataManager } from './DataManager/DataManager';

function App() {

  let dataManager = new DataManager();
  initDataManager(dataManager);

  return (
    <div className="App">
      <Header />
      <MainWindow movieCollection={dataManager.movieCollection}/>
    </div>
  );
}

export default App;
