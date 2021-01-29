import React from 'react'
import Header from './components/header'
import categories from "./store";


function App() {
  return (
    <Header categories = {categories}/>
  );
}

export default App;
