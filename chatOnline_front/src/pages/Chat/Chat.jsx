import { IoMdSend } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../components/redux/slicers/messageSlice";
import { socket } from "../../components/socketIo/socket";
import { useState, useEffect } from "react";
import Message_send from "../../components/chat_components/Message.jsx";


export default function Chat(){
  const [chatMessages, setChatMessages] = useState([])

  const username = useSelector((state) => state.user.name)
  const message = useSelector((state) => state.message.contentMessage);
  const chatRoom = useSelector((state) => state.user.chatRoom)
  const dispatch = useDispatch();

  const handleChange = (content) => {
    dispatch(sendMessage(content))
  }
  
  const send = () => {
    socket.emit('send_message', message)

    dispatch(sendMessage(''))
  }

  const handleEnter = (keyPress) => {
    if (keyPress.key == 'Enter'){
      send()
    }
  }

  useEffect(() => {
    socket.on('receive_message', message_data => {
      setChatMessages((current) => [...current, message_data])
    })

    return () => socket.off('receive_message')
  }, [socket])

    return(
        <div>
            <div className='h-[43rem] bg-white rounded-lg flex'>

        {/* <div className='w-[22rem] h-full border-r-2'>
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
        </div> */}

        <div className='w-full h-full flex flex-col py-3'>

          <div className='z-30 py-4 px-7 flex w-full justify-end'>
            {chatRoom}
          </div>

          <div className='w-full h-full flex flex-col grow bg-gradient-to-b from-purple-400 to bg-slate-50 justify-end items-end'>
            {
              chatMessages.map((item) => {
                  return (
                  <Message_send message_content={item.message} author={item.authorName} receive={item.authorName != username}/>
                  )
              })
            }
          </div>

          <div className='self-center flex space-x-7 items-center pt-3 px-4'>
            
            <input type="text" name="" className='border rounded-xl w-[50rem] py-2 px-4 focus:outline-none focus:ring-1 focus:bg-slate-50' value={message} onChange={(e) => handleChange(e.target.value)} onKeyDown={(key) => handleEnter(key)}/>

            <div data-tooltip='send'>
              <button onClick={send}>
                <IoMdSend className='border-2 rounded-full w-10 h-10 p-[0.32rem] relative hover:bg-black hover:text-white hover:cursor-pointer hover:border-black transition-all delay-75'/>
              </button>
            </div>

          </div>

        </div>

      </div>
        </div>
    )
}