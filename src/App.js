import logo from './logo.svg';
import './App.css';
import Home  from './pages/home/Home';
import Login from './components/login/Login';
import ApplicationComponent from './components/Appform/Application';

import Sidebar from './components/sidebar/Sidebar';
import Navbar1 from './components/navbar/Navbar1';
import Admin from './components/Admin/admin';
import Application from './components/Appform/Application1';


function App() {
  return (
    <div className="App">
     <Navbar1 />
     <Application />
     
    </div>
  );
}

export default App;
