import React, {useState, useEffect}  from 'react'

const Digital = () => {
    const[clockState,setClockState]=useState();
    useEffect(()=>{
        setInterval(()=>{
            const date=new Date();
            setClockState(date.toLocaleTimeString());
        },1000);
    },[]);
    return (
        <div className="digital">
            <h2>{clockState}</h2>
        </div>
    )
}

export default Digital
