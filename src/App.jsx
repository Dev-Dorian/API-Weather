import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Search } from './components/Search'
import { Main } from './components/Main'

function App() {
  const [location, setLocation] = useState()
  return (
    <>
      <Search />
      <Main />
    </>
  )
}

export default App
