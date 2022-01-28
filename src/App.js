import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import {AppProvider} from './AppContext';
// components

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Allergies from './components/tenants/Allergies';

// axios api
import api from "./api/api";



function App() {

  // global useState for sidebar toggle
  const [sideBarShowing, setSidebarShowing] = useState(false);
  const [content, setContent] = useState("")
  const [tenantList, setTenantList] = useState("")
  const [ allergiesList, setAllergiesList] = useState([]);

    // state for tenant action tab
  const [ currentTab, setCurrentTab] = useState("provide service");

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

  // code for fetching tenant
  useEffect(()=>{
    fetchTenant();
  }, [])

  const fetchTenant = () =>{

    let token = localStorage.getItem('token');
    api.get('/tenants/fetch' , {
        headers:{
          'Authorization' : `Bearer ${token}`
        }
      }).then(res => {
        console.log(res)
        setTenantList(res.data)
      })
  }

  

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
    <AppProvider value={{ allergiesList, setAllergiesList, currentTab, setCurrentTab,  tenantList, setTenantList, action , setAction, dialogClose, setDialogClose, user,setUser, unsetUser, sideBarShowing, setSidebarShowing , content ,setContent}}>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/table" element={<Allergies/>}/>
          </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;