import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import {AppProvider} from './AppContext';
// components

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';



function App() {

  // global useState for sidebar toggle
  const [sideBarShowing, setSidebarShowing] = useState(false);
  const [content, setContent] = useState("")
  const [user, setUser] = useState(null)

    // function for clearing localStorage
  const unsetUser = () =>{
    localStorage.clear();
  }


  useEffect(()=>{
     let user = localStorage.getItem('user');
        
          if(user !== null){
            setUser(user)
          } else {
            setUser(null)
          }
  },[])
   
 

  return (
    <AppProvider value={{user,setUser, unsetUser, sideBarShowing, setSidebarShowing , content ,setContent}}>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;