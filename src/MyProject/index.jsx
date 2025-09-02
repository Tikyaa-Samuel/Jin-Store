import logo from "./assets/logo.svg";
import "./index.css";
const MyProject = () =>{
    return(
        <>
        <div>
            <div className="header">
                <img src={logo} alt="" />
                <p>Skils</p>
                <p>Projects</p>
                <p>Contact Me</p>
            </div>
        </div>
        </>
    )
}

export default MyProject;