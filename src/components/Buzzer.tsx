import { timeStamp } from 'console';
import React, { FC, useEffect, SyntheticEvent, useState } from 'react'
// import { setInterval } from 'timers';

interface BuzzerProps {
    clickDelegation: (e: SyntheticEvent, tempo: number) => void;
}

const Buzzer:FC<BuzzerProps> = ({clickDelegation}) => {

    // ********************** //
    // with linear regression
    // ********************** //
    
    let beatTimes: number[] = [];
    let xSum: number  = 0;
    let xxSum: number = 0;
    let ySum: number  = 0;
    let yySum: number = 0;
    let xySum: number = 0;
    let periodPrev: number = 0;
    let aPrev: number = 0;
    let bPrev: number = 0;


    const handleResetClick = () => {
        beatTimes.length = 0;
        xSum  = 0;
        xxSum = 0;
        ySum  = 0;
        yySum = 0;
        xySum = 0;
        periodPrev = 0;
        aPrev = 0;
        bPrev = 0;

        console.clear();
    };

    const handleTap = (e: any) => {
        e.preventDefault();
        e.stopPropagation();


        // ********************** //
        // with linear regression
        // https://blog.oliverjumpertz.dev/simple-linear-regression-theory-math-and-implementation-in-javascript
        // https://www.nayuki.io/
        // ********************** //
        
        beatTimes.push(Date.now());
        const n = beatTimes.length;

        // Coordinates for linear regression
        const x = n - 1;
        const y = beatTimes[n - 1] - beatTimes[0];

        // Regression cumulative variables
        xSum  += x;
        xxSum += x * x;
        ySum  += y;
        yySum += y * y;
        xySum += x * y;

        if (n >= 2) {
            const period = y / x;

            // Advanced
            const xx = n * xxSum - xSum * xSum;
            const a = (n * xySum - xSum * ySum) / xx;  // Slope
            const b = (ySum * xxSum - xSum * xySum) / xx;  // Intercept
            let tempo = Number((60000 / a).toFixed(3));
            tempo = Math.round(tempo);
            console.log(tempo + " BPM");
            clickDelegation(e, tempo);
            
            periodPrev = period;
            aPrev = a;
            bPrev = b;
        }

        // ********************** //
        // ********************** //

    };

    useEffect(() => {
        window.addEventListener('keydown', e => handleTap(e));
        return window.removeEventListener('keydown', e => handleTap(e));
    });

    return(
        <>
            <button onClick={e => handleTap(e)} className='btn__buzzer pulsar'>BUZZER</button>
            <button onClick={handleResetClick} className='btn__reset'>RESET</button>
        </>
    );
};

export default Buzzer