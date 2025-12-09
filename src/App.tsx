import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tiptap from './Tiptap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tiptap />
    </>
  )
}

export default App
