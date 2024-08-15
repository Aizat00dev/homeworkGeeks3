import Description from "../components/Description"
import style from "./AboutPage.module.css"


export default function AboutPage(){
    return(
        <div className={style.font}>

           <Description obj={{
             title: "title2",
             description: "description2",
             }}/>
        </div>
    )
}