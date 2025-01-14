import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from 'socket.io-client';
import './join.css';
import { changeUserName } from "../../components/redux/userSlice";


export default function Join(){
    const [chatRoom, setChatRoom] = useState('');

    const go = useNavigate();
    const username = useSelector((state) => state.username.name);
    const dispatch = useDispatch();

    const handleClick = async () => {
        if (username.trim()){
            go(('/chat/:id').replaceAll(':id', chatRoom))
            
            const socket = await io.connect('http://localhost:8080')
            socket.emit('set_username', username)
        }
        else {
            window.alert('preencha o campo de chat')
        }
    }

    const enterKey = (e) => {
        if (e.key == "Enter"){
            handleClick()
        }
    }

    const onChangeInput = (value) => {
        dispatch(changeUserName(value))
        setChatRoom(value)
    }


    // const username = 

    return(
        <div className="flex flex-col align-center w-[20rem] text-center space-y-5">
            <h1 className="font-bold text-[20px] border-b-2 border-purple-800 flex self-center">Join</h1>

            <div className="space-x-4 ">
                <input type="text" name="nomeUser" id="" className="rounded-xl py-1 px-3 focus:outline-none focus:ring-1" placeholder="Nome de usuário" 
                onChange={(e) => {onChangeInput(e.target.value)}} onKeyDown={enterKey}/>

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