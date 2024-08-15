import Description from "../components/Description";
import style from "./MainPage.module.css"




export default function MainPage(){
    return(
        <div className={style.font2}>
           <Description obj={{
             title: "title1",
             description: "description1",
             }}/>
        </div>
    )
}