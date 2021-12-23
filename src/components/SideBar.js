import React, { useState , useContext, useEffect} from 'react';
import {FormControl ,Form,Button} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import AppContext from '../AppContext';
import Dashboard from '../pages/Dashboard'

import './Sidebar.css';


function Sidebar() {

  const { sideBarShowing, setSidebarShowing, content, setContent} = useContext(AppContext);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar)
    setSidebarShowing(!sidebar)
  }

  useEffect( () => {
    setSidebarShowing(sidebar)
    console.log(sideBarShowing)
  }, [sidebar])

  const toggleContent =(data) => {
    setContent(data)
    console.log(content)
  }




  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
            <div className="d-flex left-navbar">
              <Form >
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <div id="loggeInUser" >
                Hello Jane Doe
              </div>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items SidebarList' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={toggleSidebar}/>
              </Link>
            </li>
            {SidebarData.map((val, key) => {
              return (
                <li key={key} className="row" onClick={()=>toggleContent(val.link)}>
                    <div id="icon">
                    {val.icon}
                    </div>
                    <div id="title">{val.title}</div>
                
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
