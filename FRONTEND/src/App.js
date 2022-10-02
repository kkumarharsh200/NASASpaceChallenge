// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import DocPage from './Pages/DocumentsPage/DocPage';
import Vbackground from './Components/VideoBackground/Vbackground';
import SearchForm from './Components/SearchForm/SearchForm';
import SingleDoc from './Pages/SingleDoc/SingleDoc';
// import DocPage from './Pages/DocumentsPage/DocPage';
import Navbar from './Components/Navbar/Navbar';
import CourselItem from './Components/CourselItems/CourselItem';

function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <header className="App-header">
         <h1>
         <Navbar/>
         <CourselItem/>
           {/* <DocPage/> */}
           <Vbackground/>
           {/* <SearchForm/> */}
           {/* <SingleDoc/> */}
           <DocPage/>
         </h1>
       </header>
    </div>
  );
}

export default App;
