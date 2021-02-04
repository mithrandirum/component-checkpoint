import logo from './logo.svg';
import './App.css';
import FullName from "./Component/FullName"
import Address from "./Component/Address"
import ProfilePhoto from "./Component/ProfilePhoto"

function App() {
  return (
    <div className="App">
     <FullName />
     <ProfilePhoto  />
     <Address  />

    </div>
  );
}

export default App;
