import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage=(props)=>{
    
    return (
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='
        bd83bfaa-a7f2-4f6f-bcf8-d0b94af5b540'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
    )
}

export default ChatsPage