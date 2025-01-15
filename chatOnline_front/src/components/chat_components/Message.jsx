


export default function Message({ message_content, author, receive }){

    if(receive){
        return(
            <div className="flex flex-col py-2 mr-5">
                <label htmlFor="message_sended" className="text-[16px] pr-3 text-right">{author}</label>
                <span id="message_sended" className="text-[19px] bg-slate-300 px-3 py-1 text-left rounded-2xl font-">{message_content}</span>
            </div>
        )
    }
    else {
        return(
            <div className="flex flex-col py-2 mr-5">
                <label htmlFor="message_sended" className="text-[16px] pr-3 text-right">{author}</label>
                <span id="message_sended" className="text-[19px] bg-blue-300 px-3 py-1 text-left rounded-2xl font-">{message_content}</span>
            </div>
        )
    }
}