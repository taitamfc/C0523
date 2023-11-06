import React, { useState } from 'react';
import { useEffect } from 'react';

function Timer(props) {
    const [count,setCount] = useState(5)

    // useEffect(() => {
    //     const interval =  setInterval( () => {
    //         setCount( count - 1 );
    //     },1000 )

    //     // Clean off
    //     return () => clearInterval(interval);
    // });

    useEffect(() => {
        let interval =  null;
        if( count <= 0 ){
            alert('het giờ')
            return () => clearInterval(interval);
        }else{
            setTimeout( () => {
                setCount( count - 1 );
            },1000 )
        }
    });

    return (
        <div>
            <h1>{ count }</h1>
            Timer
        </div>
    );
}

export default Timer;