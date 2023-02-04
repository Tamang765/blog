
import Home from "./Components/home/Home";
import Single from './Components/pages/single/single'
import Write from "./Components/write/Write";
import Setting from "./Components/pages/settings/Setting";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

function App() {
  const user=true;
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={user ? <Home/>:<Register/>}/>
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
        <Route path="/write" element={user ? <Write/> : <Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path="/setting" element={user ? <Setting/>: <Register/>}/>        
      </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
