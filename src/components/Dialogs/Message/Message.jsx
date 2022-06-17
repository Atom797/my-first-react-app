import messageCss from './Message.module.css'

const MessageItem = (props) => {
    
    return (
        <div>
            {props.message}
        </div>
    )
}

export default MessageItem;