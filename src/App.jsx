import './App.css'
import { useState } from 'react'

// jsx (javascript xml) 형식의 함수임
function App() {
  return (
    <div>
      <Counter/>   {/* 함수를 태그처럼 사용함 */}
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
        onClick={ () => setCount( prev => prev + 1 ) }>  {/* 에로우 funtion을 쓴 이유 저번 시간에 함 */}
          증가
      </button>
    </div>
  )
}

export default App