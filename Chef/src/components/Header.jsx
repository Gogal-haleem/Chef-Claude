import "../index.css"
import Chef from "./image.png"

export default function Header(){

    function MouseOver(){
        console.log("This is the main logo");
            
    }

    return <div className="Head">
        <img  onMouseOver={MouseOver}className="Head-logo" src={Chef} alt="chef-logo"
        width="130px"/>
        <h1 className="Head-heading">
            Chef Claude
        </h1>
        
    </div>
}