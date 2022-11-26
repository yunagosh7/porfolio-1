import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-info">
            <h1>Vila Juan Cruz</h1>
            <p>Gualeguaychú, Entre Rios</p>
        </div>
        <div className="footer-contact">
            <h3>Contacto</h3>
        </div>
        <div className="footer-sns">
            <div className="design-by">
               Diseño por: Vila Juan Cruz
            </div>
            <div className="sns-links">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/juan-cruz-vila-arevalo-001111246/">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
                <a rel="noreferrer" target="_blank" href="https://github.com/yunagosh7">
                    <i className="fab fa-github github"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer