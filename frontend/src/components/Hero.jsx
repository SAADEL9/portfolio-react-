import heroImg from '../assets/hero.png';
import "../css/heroStyle.css";
function Hero()
{return(
    <div className="heroContainer">
        <div className="heroLeft">
            <h3> hi , i'm saad elmahi</h3>
            <p>I'm currently in my 4th year in Software Engineering . I'm passionate about building modern web applications and always eager to learn new technologies.</p>
       
        </div>
<div className="heroRight">
    <img src={heroImg} alt="hero image" />
</div>
    </div>
);


}
export default Hero;