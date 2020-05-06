import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsPage from '../src/pages/SeasonsPage';

function mainPage() {
  return <SeasonsPage/>
}

ReactDOM.render(
  mainPage,
  document.getElementById('root')
);


export default mainPage;
