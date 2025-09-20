import heroImg from '../assets/hero.png';
import "../css/heroStyle.css";
function Hero()
{return(
    <div className="heroContainer">
        <div className="heroLeft">
            <h3> hi , i'm saad elmahi</h3>
            <p>  I'm a passionate software developer focused on building modern web applications with React, Django, and AI tools. I love turning ideas into clean, efficient, and responsive digital solutions.</p>
       
        </div>
<div className="heroRight">
    <img src={heroImg} alt="hero image" />
</div>
    </div>
);


}
export default Hero;