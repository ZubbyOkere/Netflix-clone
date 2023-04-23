import { Route, Routes } from 'react-router-dom'
import Navbaar from './components/Navbaar'
import Home from './Pages/Home'
import { AuthContextProvider } from './context/AuthContext'
import Account from './Pages/Account'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import UsersOnly from './components/UsersOnly'

function App() {
  return (
    <div className='app'>
      <AuthContextProvider>
        <Navbaar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route
            path='/account'
            element={
              <UsersOnly>
                <Account />
              </UsersOnly>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
