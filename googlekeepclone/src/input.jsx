export default function Input(props){
    return(
    <div className="inputcontainer">
    <textarea className="headinginput" name="heading" rows="1" cols="50" placeholder="Title" onChange={props.onChange} value={props.state.heading}></textarea>
    <textarea className="descinput" name="desc" rows="4" cols="50" placeholder="Take a Note" onChange={props.onChange} value={props.state.desc}></textarea>
    <div className="add">Add</div>
    </div>);
}