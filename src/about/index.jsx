import './index.css'
import WelcomeButton from './../components/welcomeButton/index'
const About = ()=>{
    return(
        <>
            <p className="about_text">About us</p>
            <WelcomeButton text={"About"}/>
        </>
    )
}

export default About;