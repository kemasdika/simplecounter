import './App.css';
import {useState} from 'react'

function App() {
  const [isCount,setIsCount] = useState(0)
  const counterPlus = () => {
    setIsCount(isCount + 1)
  }
  const counterMinus = () => {
    setIsCount(isCount - 1)
  }
  return (
    // i use tailwind as framework CSS
    <div className="App">
      <div className='flex flex-col justify-center items-center h-screen bg-gray-300'>
          <div className='w-40 h-40 bg-gray-200 flex justify-center items-center rounded-lg shadow'>
            <h1 className='text-5xl'>{isCount}</h1>
          </div>
          <button className='w-40 bg-gray-500 text-white rounded-md h-8 hover:bg-gray-700 transition delay-150 focus:outline-none mt-4'
          onClick={counterPlus}>Count +</button>
          <button className='w-40 bg-gray-500 text-white rounded-md h-8 hover:bg-gray-700 transition delay-150 focus:outline-none mt-2'
          onClick={counterMinus}>Count -</button>
      </div>
    </div>
  );
}

export default App;
