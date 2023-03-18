import './App.css';
import Head from './Components/Head/Head';
import Main from './Components/Main/Main';
import SideNav from './Components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <Head/>
      <SideNav/>
      <Main/>
    </div>
  );
}

export default App;
