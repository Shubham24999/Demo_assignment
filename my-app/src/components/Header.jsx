import style from "./Header.module.css"


function Header(){


    return <div className={style.cont}>

        <div className="box1" >
        
        <div className={style.nav}>
        <div><img className={style.logo}  src="https://i.postimg.cc/YCp7v5dX/logo.png" alt="" /></div>
        <div><a href="#" style={{color:"white"}}><h3>Hourglass</h3></a></div>
        <div><select name="products" id="pro">
            <option value="Products">Products</option>
        </select></div>
        <div><select name="resources" id="res">
            <option value="resources">Resources</option>
        </select></div>
        <div className="box2">
            <div><a href="#" style={{color:"white"}}>Support</a></div>
            <button>Talk to sales</button>
        </div>
        </div>
        
        
        <div><h3>We design physical <a href="#" style={{color:"white"}}>experiences</a> that create more happy in the world</h3></div>
        <div><p>-- We're a full-service interior designer agency who specialise in simple,useful and beautiful solutions for any space.</p></div>
        <div>
            <button>
                Showreel
            </button>
            <button style={{color:"white",backgroundColor:"#651FFF"}}>
                Get in touch
            </button>
        </div>
        <div>
            <img style={{width:"100%"}} src="https://i.postimg.cc/jSG8Fmzr/about-image.png" alt="about-img" />
        </div>
        <div>
            <p>We've worked with some greate startup's </p>
        </div>
        <div style={{display:"flex",gap:"15px"}}>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/5tjmfVMr/company-logo-layer.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/6pZ9g78b/company-logo-sisyphus.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/RVD5MMrr/company-logo-circooles.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/Bvdntxd0/company-logo-catalog.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/Bvdntxd0/company-logo-catalog.png" alt="" /></div>
            <div><img style={{width:"100%"}} src="https://i.postimg.cc/W3LqxLpg/company-logo-quotient.png" alt="" /></div>
        </div>

        </div>


    </div>
}

export default Header


{/* <div id="manu" onclick="onclickmenu()">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
            <p id="m">menu</p>
        </div> */}