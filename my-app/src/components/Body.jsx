import style from "./Body.module.css"
import { AiOutlineAliwangwang } from "react-icons/ai";
import { FiZap } from "react-icons/fi";

function Body(){
    return <div className={style.container}>
        {/* <div > */}
            <div className={style.bodybox1}>
               <div >
                <p style={{color:"#651FFF"}}>Who we are</p>
                <h3>Commercial interior designers</h3>
                <p>
                    Untitled are a commercial interior design studio. We specialise in customised office design, rstaurent design, shop design, and studio design.
                </p>
                </div>
               <div>
                <div>
                    <h3><AiOutlineAliwangwang style={{border:"1px solid red",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#D1C4E9",color:"#651FFF",marginRight:"10px"}}/> Share team inboxes</h3>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div>
                    <h3> <FiZap style={{border:"1px solid red",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:"#D1C4E9",color:"#651FFF",marginRight:"10px"}}/>Deliver instant answers</h3>
                    <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                </div>
            
            </div>
            </div>
            <div className={style.bodybox2}>
                <img style={{width:"100%"}} src="https://i.postimg.cc/KvqZjRpQ/hero-image.jpg" alt="" />
            </div>
            <br />
            <br />
            <hr />
        {/* </div> */}
    </div>
}

export default Body