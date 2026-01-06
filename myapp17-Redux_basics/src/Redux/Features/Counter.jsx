import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increamentByAmount } from "./CounterSlice";
import { useState } from "react";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const disPatch = useDispatch();
    const [tobeIncreasedBy, setTobeIncreasedBy] = useState(0);

    return (
        <>
            <button aria-label="Increament value" className="button" onClick={() => disPatch(increament())} >
                increament
            </button>
            <span className="count" >{count}</span>

            <button aria-label="Decreament value" className="button" onClick={() => disPatch(decreament())} >
                decreament
            </button>
            <input className="inputNumber" value={tobeIncreasedBy} onChange={(e) => { setTobeIncreasedBy(Number(e.target.value)) }} />
            <div>
                <button className="button" onClick={() => disPatch(increamentByAmount(tobeIncreasedBy))} >Increase by 5</button>
            </div>

        </>
    )
}