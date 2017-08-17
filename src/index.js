import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDmsAUgCdfm_LASXEn5-qHshKiOq3EzQZo';

// Create a new component & this component should produce some HTML

const App = () => {
  return <div>Hi!</div>;
}

// Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
