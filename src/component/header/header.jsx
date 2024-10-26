import "./Header.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { TiThMenu } from "react-icons/ti";
import { MdCancelPresentation } from "react-icons/md";
import { useRef } from "react";

function Navbar() {

  const menue = useRef();
  const menueOpen=()=>{

    menue.current.style.right = '0';

  }

  const menueClose=()=>{

    menue.current.style.right='-300px';

  }
  return (
    <>
      <div className="container">
        <div className="heading_container">
          <h3>PORTFOLIO</h3>
        </div>
       
        <div className="nav">
        <TiThMenu onClick={menueOpen} style={{height:"30px",width:"30px"}} className="nav-open"/>
            <ul ref={menue}className="nav_menu">
            <MdCancelPresentation onClick={menueClose} style={{height:"35px"}} className="nav-close"/>
                <li> <AnchorLink className='anchor-link' offset={50} href='#home'>HOME</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#about'>ABOUT</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#Services'>SERVICES</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' offset={50} href='#Contact'>CONTACT ME</AnchorLink></li>
            </ul>
           
        </div>

      
       
      </div>
    </>
  );
}

export default Navbar;
