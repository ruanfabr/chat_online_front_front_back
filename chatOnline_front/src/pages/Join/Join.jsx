import { useNavigate } from "react-router"
import { useState } from "react"
import './join.css'


export default function Join(){
    const [chatRoom, setChatRoom] = useState('')

    const go = useNavigate()

    const handleClick = () => {
        go(('/chat/:id').replaceAll(':id', chatRoom))
    }
    const enterKey = (e) => {
        if (e.key == "Enter"){
            go(('/chat/:id').replaceAll(':id', chatRoom))
        }
    }

    return(
        <div className="flex flex-col align-center w-[20rem] text-center space-y-5">
            <h1 className="font-bold text-[20px] border-b-2 border-purple-800 flex self-center">Join</h1>

            <div className="space-x-4 ">
                <input type="text" name="nomeUser" id="" className="rounded-xl py-1 px-3 focus:outline-none focus:ring-1" onChange={(e) => {setChatRoom(e.target.value)}} onKeyDown={enterKey}/>
                <button type="submit" onClick={handleClick}
                className="bg-gradient-to-t 
                text-white font-medium py-1 px-2 rounded-md border-2 rainbow-animate"
                >
                    Enviar
                </button>
            </div>
        </div>
    )
}