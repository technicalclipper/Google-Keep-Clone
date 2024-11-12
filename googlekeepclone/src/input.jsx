export default function Input(){
    return(
    <div className="inputcontainer">
    <textarea className="headinginput" name="message" rows="1" cols="50" placeholder="Title"></textarea>
    <textarea className="descinput" name="message" rows="4" cols="50" placeholder="Take a Note"></textarea>
    </div>);
}