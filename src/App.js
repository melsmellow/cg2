import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import {AppProvider} from './AppContext';
// components

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


// axios api
import api from "./api/api";



function App() {

  // global useState for sidebar toggle
  const [sideBarShowing, setSidebarShowing] = useState(false);
  const [content, setContent] = useState("")
  const [user,setUser]= useState({

    id:null,
    user_type:null

  })

  // checking for logged in user
  useEffect(()=>{
     let token = localStorage.getItem('token');
     api.get('/users/details' , {
          headers: {Authorization: `Bearer ${token}`}
    }).then(result => {
        if(typeof result.data._id !== "undefined"){
          setUser({
            id: result.data._id,
            user_type: result.data.user_type
          })
        }else{
          setUser({
            id:null,
            user_type: null
          })
        }   
    })

  },[])

  

  // for tenant action 
  const [action , setAction] = useState("")

    // function for clearing localStorage
  const unsetUser = () =>{
    localStorage.clear();
  }

  // useState for closing dialog automatically
  const [dialogClose, setDialogClose] = useState(false)


  useEffect(()=>{
     let user = localStorage.getItem('user');
        
          if(user !== null){
            setUser(user)
          } else {
            setUser(null)
          }
  },[])
   
 

  return (
    <AppProvider value={{action , setAction, dialogClose, setDialogClose, user,setUser, unsetUser, sideBarShowing, setSidebarShowing , content ,setContent}}>
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