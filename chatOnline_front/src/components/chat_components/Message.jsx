


export default function Message({ message_content, author, receive }){

    if(receive){
        return(
            <div className="flex flex-col py-[2px] bg-slate-300 ml-6 rounded-lg pt-2 self-start">
                <label htmlFor="message_received" className="text-[15px] px-3">
                    {author}
                </label>
                <span id="message_received" className="text-[19px] py-1 w-fit px-3">
                    {message_content}
                </span>
            </div>
        )
    }
    else {
        return(
            <div className="flex flex-col py-[2px] bg-blue-300 mr-6 rounded-lg pt-2 self-end">
                <label htmlFor="message_sended" className="text-[15px] px-3">
                    {/* {author} */}
                    você
                </label>

                <span id="message_sended" className="text-[19px] py-1 w-fit px-3">{message_content}</span>
            </div>
        )
    }
}