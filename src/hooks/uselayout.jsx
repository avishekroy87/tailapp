import { useState, useEffect } from "react";

const useLayout = (ss) => {
    const [screenize, setScreenize] = useState(false)
    const checkScreensize = () => {
        setScreenize(window.innerWidth < ss);
    }
    useEffect(() => {
        checkScreensize();
        window.addEventListener('resize', checkScreensize);

        return () => window.removeEventListener('resize', checkScreensize);

    }, [ss])
    return screenize
}
export default useLayout