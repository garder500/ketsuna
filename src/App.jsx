import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" />
        </a>
      </div>
      <h1 className="text-center">Vite + React</h1>
      <div className="flex flex-col items-center justify-center">
        <button onClick={() => setCount((count) => count + 1)} className="bg-blue-500 text-white p-2 rounded-md">
          count is {count}
        </button>
        <p className="text-center">
          Edit <code className="text-blue-500">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
