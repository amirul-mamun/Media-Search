
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
  import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
      
      <ToastContainer/>
    </div>
  )
}

export default App