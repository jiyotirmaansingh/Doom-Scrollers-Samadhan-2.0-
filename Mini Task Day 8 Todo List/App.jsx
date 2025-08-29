import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import Counter from './components/counter'
function App() {
  const [count, setCount] = useState(0)
  // const arr =[1,2,3,4,5,6]
  // const ans = arr.map((el)=><li key={el}>{el}</li>);
  return (
    <>
      {/* <h1>hello</h1> */}
      {/* <ol>{ans}</ol> */}
      {/* <Counter/> */}
      <Todo />
    </>
  )
}

export default App