import './App.css';
import {Header} from './components/header'
import {Footer} from './components/footer'
import {Outlet} from "react-router-dom";


function App() {


  return (
    <div className="App overflow-x-hidden">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
