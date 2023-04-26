import style from "./Footer.module.css"

function Footer(){


    return <div className={style.fcont}>
            <div className={style.fbox}>
                <div className={style.box1}>
                    <div >
                      <img style={{width:"40px",height:"40px",margin:"10px"}} src="https://i.postimg.cc/YCp7v5dX/logo.png" alt="" />
                      <div href="#" style={{color:"#651FFF"}}><h3>Hourglass</h3></div>
                    </div>
                    <div >
                        <a  href="#">Overview</a>
                        <a  href="#">Features</a>
                        <a  href="#">Pricing</a>
                        <a  href="#">Careers</a>
                        <a  href="#">Help</a>
                        <a  href="#">Privacy</a>
                    </div>
                </div>
                <div className={style.box2}>
                    <p style={{color:"black",margin:"10px"}}><b>Stay up to date</b></p>
                    <div >
                    <input  type="text" style={{width:"120px"}} placeholder="Enter your email"  />
                    <button >Subscribe</button>
                    {/* style={{color:"white",border:"0px",backgroundColor:"#651FFF",borderRadius:"5px"}} */}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />

            <div style={{display:"flex",gap:"80px"}}>
                <div style={{width:"60%"}}>
                    <p>@ 2077 Fake Company, All rights reserved.</p>
                </div>
                <div className={style.bottom}>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
            
    </div>
}

export default Footer