import './App.css';
import API from './api_view/api_view';
import LIST from './list_view/list_view';

import { Route, useNavigate, Routes, matchPath} from "react-router-dom";




export default function HomePage() {

  const App = ()=> {
    const routeChangeAPI = () =>{
      let path =`/api`;
      navigate(path)
    }
    
    
    const routeChangeList = () =>{
    let path =`/list`;
    navigate(path)
    }
    
    
    let navigate = useNavigate(); 
  
    
    return (
      <div>
        <div class="bg"></div>
        <div class="content">
          <h1>Econic Demo</h1>
          <h3>Choose which you want to view</h3>
          <button class="button btn btn-outline-dark" onClick={routeChangeAPI}>API Demo</button>
          <button class="button btn btn-outline-dark" onClick={routeChangeList}>List Demo</button>
        </div>
      </div>
    );
  }

  return (



    <Routes>
      
  
  
  
      
  
      
  
      
      <Route path="/" exact element={<App/>} />
      <Route path="/api" exact element={<API/>} /> 
      <Route path="/list" exact element={<LIST/>} /> 

           
      
      
  
  
  
    
    
  
  
    </Routes>
  )
}

