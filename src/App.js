import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Header title="Grocery "/>
      <Content
      // items={items}
      // handleCheck={handleCheck}
      // handleDelete={handleDelete}
       />
      <Footer/>
    </div>
    
        
      
  );
}

export default App;
