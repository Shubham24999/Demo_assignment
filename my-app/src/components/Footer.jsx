import style from "./Footer.module.css"



function Footer(){


    return <div style={{border:"1px solid red",width:"90%",margin:"auto"}}>
        <div style={{display:"flex"}}>
                <div style={{width:"60%"}}>
                    <div style={{display:"flex",gap:"20px"}}>
                      <img style={{width:"40px",height:"40px",margin:"10px"}} src="https://i.postimg.cc/YCp7v5dX/logo.png" alt="" />
                      <div href="#" style={{display:"flex",justifyContent:"center",justifyItems:"center"}}><h3>Hourglass</h3></div>
                    </div>
                    <br />
                    <div style={{display:"flex",border:"1px solid green",width:"90%",justifyContent:"space-around"}}>
                        <a style={{textDecoration:"none"}} href="#">Overview</a>
                        <a style={{textDecoration:"none"}} href="#">Features</a>
                        <a style={{textDecoration:"none"}} href="#">Pricing</a>
                        <a style={{textDecoration:"none"}} href="#">Careers</a>
                        <a style={{textDecoration:"none"}} href="#">Help</a>
                        <a style={{textDecoration:"none"}} href="#">Privacy</a>
                    </div>
                </div>
                <div style={{width:"20%"}}>
                    <p style={{color:"black"}}><b>Stay up to date</b></p>
                    <div style={{display:"flex",border:"1px solid green",gap:"20px"}}>
                    <input type="text" style={{width:"120px"}} placeholder="Enter your email"  />
                    <button style={{color:"white",border:"0px",backgroundColor:"#651FFF",borderRadius:"5px"}}>Subscribe</button>
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
                <div style={{display:"flex",width:"25%",justifyContent:"space-between",border:"1px solid red"}}>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
            
    </div>
}

export default Footer