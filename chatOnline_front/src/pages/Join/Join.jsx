import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../components/socketIo/socket";
import './join.css';
import { changeUserName, setChatRoom } from "../../components/redux/slicers/userSlice";


export default function Join(){

    const go = useNavigate();
    const username = useSelector((state) => state.user.name);
    const chatRoom = useSelector((state) => state.user.chatRoom);
    const dispatch = useDispatch();

    const handleClick = async () => {
        if (username.trim()){
            go(('/chat/:id').replaceAll(':id', chatRoom))
            
            const userInfo = {
                name: username,
                chatRoom: chatRoom
            }
            socket.emit('set_user', userInfo)
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

    const onChangeInputName = (value) => {
        dispatch(changeUserName(value))
    }
    
    const onChangeInputChatRoom = (value) => {
        dispatch(setChatRoom(value))
    }


    // const username = 

    return(
        <div className="flex flex-col align-center w-[20rem] text-center space-y-5">
            <h1 className="font-bold text-[20px] border-b-2 border-purple-800 flex self-center">Join</h1>

            <div className="space-x-4 space-y-3">
                <div className="space-y-4">
                    <input type="text" name="nomeUser" id="" className="rounded-xl py-1 px-3 focus:outline-none focus:ring-1" placeholder="Nome de usuário"  
                    value={username} onChange={(e) => {onChangeInputName(e.target.value)}} onKeyDown={enterKey}/>
                    
                    <input type="text" name="chatRoom" id="" className="rounded-xl py-1 px-3 focus:outline-none focus:ring-1" placeholder="Sala de chat" 
                    onChange={(e) => {onChangeInputChatRoom(e.target.value)}} onKeyDown={enterKey}/>
                </div>

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