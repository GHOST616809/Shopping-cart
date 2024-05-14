import React from 'react'
import { useSelector } from 'react-redux'

const ChatbotSmartphone = () => {
const arr=useSelector(state=>state.display.smartphones)

    return (
    <div>
      {arr.map((item)=>{
        return(
            <div className='chatbot-smartphone'>
                <img src={item.thumbnail!==undefined?item.thumbnail:""} style={{height:"80px",width:"80px"}} alt="smartphone" />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                

               </div> 
        )
          
      })}
    </div>
  )
}

export default ChatbotSmartphone
