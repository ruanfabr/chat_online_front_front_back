import { IoMdSend } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../components/redux/slicers/messageSlice";
import { socket } from "../../components/socketIo/socket";
import { useState, useEffect, useRef } from "react";
import Message_send from "../../components/chat_components/Message.jsx";
import './chat.css'


export default function Chat(){
  const [chatMessages, setChatMessages] = useState([])

  const username = useSelector((state) => state.user.name);
  const message = useSelector((state) => state.message.contentMessage);
  const chatRoom = useSelector((state) => state.user.chatRoom);
  const dispatch = useDispatch();

  const chatRef = useRef(null);

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

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [chatMessages])

    return(
        <div>
          <div className='h-[43rem] bg-slate-200 rounded-lg flex shadow-2xl max-sm:h-screen max-sm:w-screen'>

          <div className='w-full h-full flex flex-col py-3'>

            <div className='z-30 py-4 px-7 flex w-full justify-center'>
              <b> {chatRoom} </b>
            </div>

            <div className='w-full h-full flex flex-col to bg-slate-50 justify-end items-end overflow-auto'>
              <div ref={chatRef} className="flex flex-col w-full py-5 gap-y-8 overflow-auto styleScroll">
              {
                chatMessages.map((item, index) => {
                    return (
                        <Message_send key={index} message_content={item.message} author={item.authorName} receive={item.authorName != username}/>
                      )
                    })
                  }
              </div>
            </div>

            <div className='self-center flex space-x-7 items-center pt-3 px-4'>
              
              <input type="text" name="" 
              value={message} onChange={(e) => handleChange(e.target.value)} onKeyDown={(key) => handleEnter(key)}
              className='border rounded-xl w-[50rem] max-sm:w-full py-2 px-4 focus:outline-none focus:ring-1 focus:bg-slate-50'
              />

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