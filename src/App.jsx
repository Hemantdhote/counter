import React,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(0);

  const increment=()=>{
    setnum(num+1);
  }
  const decrement=()=>{
    setnum(prevnum=>Math.max(0,prevnum-1));
  }
  const reset=()=>{
    setnum(0);
  }

  return (
    <div className>

      <div className='flex flex-col items-center justify-center w-full h-screen gap-3'>
        <div className='text-5xl font-bold'> {num} </div>
        <div className='flex gap-3'>
          <button onClick={increment}  className='px-2 py-1 bg-neutral-500 rounded-md text-white'>Increment</button>
          <button onClick={decrement} className='px-2 py-1 bg-neutral-500 rounded-md text-white'>Decrement</button>
          <button onClick={reset} className='px-2 py-1 bg-neutral-500 rounded-md text-white'>Reset</button>
        </div>
      </div>



    </div>
  )
}

export default App
