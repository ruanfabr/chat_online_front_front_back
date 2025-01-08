import './App.css'
import { IoMdSend } from "react-icons/io";

function App() {

  return (
    <div className='h-screen bg-slate-300 flex flex-col justify-center items-center'>

      <div className='h-[43rem] bg-white rounded-lg flex'>

        <div className='w-[22rem] h-full border-r-2'>
          <ul className='w-full flex flex-col items-center align-middle space-y-8 py-8 marker:text-[24px] list-disc list-inside'>

            <li className='hover:cursor-pointer hover:bg-slate-100 marker:text-green-600 w-full text-center'>
                  amiguim 1
                  <b className='bg-purple-600 rounded-full w-10 h-10 text-center content-center'>img</b>
            </li>

            <li className='hover:cursor-pointer hover:bg-slate-100 marker:text-red-600 w-full text-center'>
                  amiguim 2
                  <b className='bg-blue-600 rounded-full w-10 h-10 text-center content-center'>img</b>
            </li>

          </ul>
        </div>

        <div className='w-full h-full flex flex-col py-3'>

          <div className='z-30 py-4 px-7 flex w-full justify-end'>
            amiguim 1
          </div>

          <div className='w-full h-full flex flex-col grow bg-gradient-to-b from-purple-400 to bg-slate-50 justify-end items-end'>
            content
          </div>

          <div className='self-center flex space-x-8 items-center pt-3'>
            
            <input type="text" name="" className='border rounded-xl w-[50rem] py-2 px-4 focus:outline-none focus:ring-1 focus:bg-slate-50'/>

            <div data-tooltip='send'>
              <IoMdSend className='border-2 rounded-full w-10 h-10 p-[0.32rem] relative hover:bg-black hover:text-white hover:cursor-pointer hover:border-black transition-all delay-75'/>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
