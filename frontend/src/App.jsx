import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserProvider } from './context/user.context'
import AppRoutes from './routes/AppRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProvider>
      <AppRoutes/>
    </UserProvider>
       
    </>
  )
}

export default App
