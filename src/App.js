import './App.css';
import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Spinner from './Components/Spinner'
import Form from './Components/Form'
import { CSSTransition } from 'react-transition-group'

function App() {
  const [loading, setloading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  setTimeout(() => {
    setloading(false)
  }, 1000);

  return (
    <div className="App">
      <Header></Header>
      {!loading ?
        <>
          <Home toggleForm={setShowForm}></Home>
          <section>
            <CSSTransition in={showForm} unmountOnExit timeout={300} classNames="form">
              <Form showForm={showForm} toggleForm={setShowForm} />
            </CSSTransition>
          </section>
        </>
        : <><Spinner /></>
      }
    </div>
  );
}

export default App;
