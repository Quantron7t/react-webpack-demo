import "./styles.css"
import IMAGE from "./assets/world.png"
import { Counter } from "./components/counter"

export const App = ()=>{
    return <div>
        <div className={"box"}>
            <h1>Hello World </h1>
            <img style={{padding:10}} src={IMAGE} width="30" height="30" alt="the world"/>
        </div>
        <span>{process.env.name}</span>
        <Counter/>
    </div>
}