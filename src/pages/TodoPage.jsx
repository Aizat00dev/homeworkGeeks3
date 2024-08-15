import Todo from "../components/Todo"
import style from "./TodoPage.module.css"



export default function TodoPage(){

    const fruits = ['apples', 'grapes', 'bananas', 'melon', 'mango'];

    const items = fruits.map(item=>{
       return <Todo
        
                key ={item.id}
                item = {item}
        />
    })


    return(
        <div className={style.style}>
           {items}
        </div>
    )
}

