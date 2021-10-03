import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

const Redirect = () => {
    const [count,setCount]=useState(1);
    const history=useHistory();
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000)
        count===0 && history.push('/Login')
        return () => clearInterval(interval);

    },[count,history])
    return (
        <div>
           redirect to home page in {count}
        </div>
    )
}

export default Redirect
