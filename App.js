import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
     <Navbar title="TextUtils" aboutText="About Us"/>
     <div className="container my-3">
              <TextForms heading="Enter the text to analyze below"/>
     </div>
     
    </>
  );
}

export default App;
