export default function Note(props) {
    return (
      <div className="notecard" >
        <div className="noteheading">{props.value.heading}</div>
        <div className="notedesc">{props.value.desc}</div>
        <div className="delete" onClick={()=>{props.delete(props.value.key)}}>DELETE</div>
      </div>
    );
  }
  