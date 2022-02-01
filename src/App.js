import './App.css';
import Home from './components/Home';
import Onbording from './components/Onbording';
import LocalStorage from './components/LocalStorage';
import Upload from './components/Upload';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import StorageManagement from './components/StorageManagement'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Onbording />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Localstorage" element={<LocalStorage />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/StorageManagement" element={<StorageManagement />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
