import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
    const handleNameChange = ()=> {
      const names=['Bob','kevin','Dave'];
      const int =Math.floor (Math.random()*3);
      return names[int]
    }
  
  
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
    
        
      
  );
}

export default App;
