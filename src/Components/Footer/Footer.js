import { Nav, NavItem, NavLink } from 'reactstrap';
import './Footer.css';
function Footer(){
    return (
        <div className="bg-light">
            <div className="container-fluid">
                <div class="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 text-center">
                        <h6 className="py-4" style={{fontWeight:"bold",fontSize:"1rem",fontFamily:"Lato",color:"#222"}}>@copyright by Najmus Shakib</h6>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <Nav className="contact-us">
                        <NavItem>
                            <NavLink href="#" className="NavLink" style={{fontWeight:"bold",fontSize:"1rem",fontFamily:"Lato",color:"#222"}}>contact-us...</NavLink>
                        </NavItem>
                        <NavItem className="active">
                            <NavLink href="#" className="NavLink"><i className="fab fa-facebook-square"></i></NavLink>
                        </NavItem>
                        <NavItem className="active">
                            <NavLink href="#" className="NavLink"><i className="fab fa-twitter-square"></i></NavLink>
                        </NavItem>
                     </Nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;