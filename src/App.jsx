import './App.css'
import APIEx from './components/APIEx';
import Demo from './components/Demo';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import RouterEx from './components/RouterEx';
import NestedRouterEx from './components/NestedRouterEx';
import AxiosEx from './components/AxiosEx';
import HooksEX from './components/hooksEX';
import Child1 from './components/child1';
import { createContext } from 'react';

export const nameContext = createContext();

function App() {
  return (
    <>
      <Router>
          <Link to={"/demo"} className='text-blue-700 underline p-5'> Demo </Link>
          <Link to={"/form"} className='text-blue-700 underline p-5 '> Registration Form </Link>
          <Link to={"/api"} className='text-blue-700 underline p-5'> API Example </Link>
          <Link to={"/router"} className='text-blue-700 underline p-5'> Router Example </Link>
          <Link to={"/axios"} className='text-blue-700 underline p-5'> Axios Example </Link>
          <Link to={"/hooks"} className='text-blue-700 underline p-5'> Hooks Example </Link>
          <Link to={"/context"} className='text-blue-700 underline p-5'> Context Example </Link>
          
          <Routes>
            <Route path='demo' element={<Demo />} />
            <Route path='form' element={<RegistrationForm />} />
            <Route path='api' element={<APIEx />} />
            <Route path='router' element={<RouterEx />} />
            <Route path="nested" element={<NestedRouterEx />} />
            {/* Wild card parameter */}
            <Route path='nested/:id' element={<NestedRouterEx />} />
            <Route path='axios' element={<AxiosEx />} />
            <Route path='hooks' element={<HooksEX />} />
            <Route path='context' element={
              <nameContext.Provider value={"Felix"}>
                <Child1 />
              </nameContext.Provider>

            } />
          </Routes>
      </Router>
    </>
  )
}

export default App
