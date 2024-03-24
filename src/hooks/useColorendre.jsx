import { useEffect, useState } from "react"

export default useColorRender = (color) => {
    const [bckground, setBckground] = useState('white')
    const toggleColor = (color) => {
        props.bckgrnd(color)
    }
    useEffect(() => {
        console.log('bckground', bckground)
    }, [bckground])
    return bckground
}