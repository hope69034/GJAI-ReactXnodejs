// import
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import compo
import Header from "./component/00.Header.js";
import Main from "./component/01.Main";
import Datapull from "./component/02.Datapull";
import Datapush from "./component/03.Datapush";
import Login from './component/04.Login';
import Join from './component/05.Join';

// function
function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Datapull" element={<Datapull></Datapull>}></Route>
        <Route path="/Datapush" element={<Datapush></Datapush>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>
      </Routes>
    </>
  );
}

export default App;