import './App.css';
import {useState} from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Spinner from './Components/Spinner'


function App() {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false)
  }, 2000);
  return (
    <div className="App">
      <Header></Header>
      {!loading ?
        <>
          <Home/>
        </>
        : <><Spinner/></>
      }
    </div>
  );
}

export default App;
