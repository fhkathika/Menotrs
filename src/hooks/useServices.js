import { useEffect, useState } from "react"

const useServices =()=>{
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./myservices.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services]
}
export default useServices;