import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increamentByAmount } from "./CounterSlice";

export function Counter() {
    const count = useSelector( (state) => state.counter.value )
    const disPatch = useDispatch();

    return(
        <>
            <button aria-label="Increament value" onClick={()=> disPatch(increament())} >
                increament
            </button>
            <span>{count}</span>
            
            <button aria-label="Decreament value" onClick={()=>disPatch(decreament())} >
                decreament
            </button>
            <div>
                <button onClick={()=> disPatch(increamentByAmount(increament,5))} >Increase by 5</button>
            </div>
        </>
    )
}