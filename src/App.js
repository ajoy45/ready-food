import { Route, Routes } from "react-router-dom";
import Home from '../src/Pagess/Home/Home';
import Login from '../src/Pagess/Login/Login';
import Singup from '../src/Pagess/Singup/Singup'
import BreakFast from "./Pagess/Home/ShowFood/BreakFast";
import Dinner from "./Pagess/Home/ShowFood/Dinner";
import Lunch from "./Pagess/Home/ShowFood/Lunch";
import Header from "./Shared/Header";


function App() {
  return (
    <div >
      <Header></Header>
       <Routes>
         <Route path="/" element={<Home></Home>}>
           <Route path="breakfast" element={<BreakFast></BreakFast>}></Route>
           <Route path="dinner" element={<Dinner></Dinner>}></Route>
           <Route path="lunch"element={<Lunch></Lunch>}></Route>
         </Route>
         <Route path="/home" element={<Home></Home>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/singup" element={<Singup></Singup>}></Route>
       </Routes>
    </div>
  );
}

export default App;
