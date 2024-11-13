export default function Note(props){
    
    return <div className="notecard">
        <div className="noteheading">{props.value.heading}</div>
        <div className="notedesc">{props.value.desc}</div>
        <div className="delete">DELETE</div>
        
    </div>
}