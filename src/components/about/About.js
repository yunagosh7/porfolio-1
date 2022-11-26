import "./About.css";
import img from "../../media/img.jpg"

const About = () => {
  return (
    <div className="about-container">
        <div className="about-desc">
        <h3>Acerca de mi</h3>
        <p>Soy un desarrollador web frontend, me encanta la programación, el diseño de interfaces y todo lo relacionado a el mundo de las ITs. Tengo conocimientos en HTML, CSS, JavaScript Vanilla y React js </p>            
        </div>
        <div className="about-img">
            <img src={img} />
        </div>
    </div>
  )
}

export default About