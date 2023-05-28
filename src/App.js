import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';


function App() {
  const[mode , setMode]= useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type) => {
    setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
      setAlert(null);
  }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","Success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return (
    <>
    <Navbar title="TestUtils" aboutTextUtils="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
    </div>
    </>
  );
}

export default App;
