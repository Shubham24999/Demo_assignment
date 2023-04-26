import style from "./Header.module.css"
import { BiCaretRightCircle } from "react-icons/bi";
import { useState, useEffect } from "react";


function Header(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

    return <div className={style.cont}>

        <div className={style.box1} >
        
        <div className={style.nav}>
            
        <div>
            <img className={style.logo}  src="https://i.postimg.cc/YCp7v5dX/logo.png" alt="" />
        </div>

        <div>
            <a href="#" style={{color:"white",textDecoration:"none"}}><h3>Hourglass</h3></a>
        </div>

        <div>
            <select name="products" id="pro">
            <option value="Products">Products</option>
            </select>
        </div>

        <div>
            <select name="resources" id="res">
            <option value="resources">Resources</option>
            </select>
        </div>
        </div>



        <div className="box2">
            <div><a href="#" style={{color:"white"}}>Support</a></div>
            <button>Talk to sales</button>
        </div>

        </div>
        
        
        <div className="hbox2">
        <div >
            <h3 style={{fontSize:"30px"}}>We design physical <a href="#" style={{color:"white"}}>experiences</a> that create more happy in the world</h3>
        </div>
        <div>
            <b><p>-- We're a full-service interior designer agency who specialise in simple,useful and beautiful solutions for any space.</p></b>
        </div>
        <div className={style.btn}>
            <button style={{color:"#651FFF"}}>
            <BiCaretRightCircle style={{marginRight:"5px"}} />
            Showreel
            </button>
            <button style={{color:"white",backgroundColor:"#651FFF"}}>
                Get in touch
            </button>
        </div>
        </div>
        



        <div>
            <img style={{width:"100%"}} src="https://i.postimg.cc/jSG8Fmzr/about-image.png" alt="about-img" />
        </div>
        <div>
            <p>We've worked with some greate startup's </p>
        </div>
        
        {windowWidth>=640?(<div className={style.logoimg}>
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/5tjmfVMr/company-logo-layer.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/6pZ9g78b/company-logo-sisyphus.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/RVD5MMrr/company-logo-circooles.png" alt="" /></div> 
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/Bvdntxd0/company-logo-catalog.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/W3LqxLpg/company-logo-quotient.png" alt="" /></div>
            </div>)
            :
            (<div className={style.rlogoimg}>
            
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/5tjmfVMr/company-logo-layer.png" alt="" /></div>
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/6pZ9g78b/company-logo-sisyphus.png" alt="" /></div>
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/RVD5MMrr/company-logo-circooles.png" alt="" /></div> 
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/Bvdntxd0/company-logo-catalog.png" alt="" /></div>
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/W3LqxLpg/company-logo-quotient.png" alt="" /></div>
                <div><img style={{width:"100%"}} src="https://i.postimg.cc/YCp7v5dX/logo.png" alt="" /></div>
            
            </div>)
            }
        

        


    </div>
}

export default Header


{/* <div id="manu" onclick="onclickmenu()">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
            <p id="m">menu</p>
        </div> */}


        // BiMenu  import { IconName } from "react-icons/bi";----- 3 hl

        // FiX  import { IconName } from "react-icons/fi";-- cross