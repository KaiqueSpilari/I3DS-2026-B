import style from "./Chat.module.css"

import { Input } from "@mui/material"
import SendIcon from "@mui/icons-material/send"
import { useState } from "react"

const Chat = (props) => {
const [messageList,setMessageList] = useState([])

  return (
    <div>
<div className={style.chat_container}>

    <div className={style.chat_container}>

    </div>
</div>
    </div>
  )
}

export default Chat
