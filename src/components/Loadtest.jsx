import { useEffect, useState } from "react"



const Loadtest = (props) => {
    const [bckground, setBckground] = useState('white')
    const toggleColor = (color) => {
        props.bckgrnd(color)
    }
    useEffect(()=>{

    },[bckground])
    return (
        <div className={bckground}>
            Choose Color
            <div onClick={() => toggleColor('red')} className="btn">Red</div>
            <div onClick={() => toggleColor('green')} className="btn">Green</div>
            <div onClick={() => toggleColor('blue')} className="btn">Blue</div>
            <div onClick={() => toggleColor('yellow')} className="btn">Yellow</div>
            <div onClick={() => toggleColor('pink')} className="btn">Pink</div>
        </div>
    )
}

export default Loadtest