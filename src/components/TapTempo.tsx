import { FC, useState, useEffect } from 'react'
import Screen from './Screen'

const TapTempo:FC = () => {

    const [tempo, setTempo] = useState<number>(0);
    const [beatTimes, setBeatTimes] = useState<number[]>([]);
    const [pulse, setPulse] = useState<boolean>(false);

    const MAX_TIME = 2000; // max time between two taps

    // ********************** //
    // linear regression variables
    // ********************** //

    let xSum: number  = 0;
    let xxSum: number = 0;
    let ySum: number  = 0;
    let yySum: number = 0;
    let xySum: number = 0;
    let periodPrev: number = 0;
    let aPrev: number = 0;
    let bPrev: number = 0;

    // ********************** //

    const handleReset = () => {
        xSum  = 0;
        xxSum = 0;
        ySum  = 0;
        yySum = 0;
        xySum = 0;
        periodPrev = 0;
        aPrev = 0;
        bPrev = 0;

        setBeatTimes(() => []);
        setTempo(0);
    };
    
    const handleTap = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setPulse(false);
        setBeatTimes(beatTimes => [...beatTimes, Date.now()]);
    };

    // binding once listeners on component mount
    useEffect(() => {
        document.addEventListener('keydown', e => handleTap(e));
        return () => document.removeEventListener('keydown', e => handleTap(e));
    }, []);

    // Linear regression based on updated beatTimes values
    // ********************** //
    // Linear regression implementation :
    // https://blog.oliverjumpertz.dev/simple-linear-regression-theory-math-and-implementation-in-javascript
    // https://www.nayuki.io/
    // ********************** //
    useEffect(() => {
        // setPulse(false);

        const n = beatTimes.length;

        // Coordinates for linear regression
        const x = n - 1;
        const y = beatTimes[n - 1] - beatTimes[0];

        // Reset tempo if times between two taps exceed MAX_TIME
        if(beatTimes[x] - beatTimes[x - 1] > MAX_TIME) {
            handleReset();
            return;
        }

        // Regression cumulative variables
        xSum  += x;
        xxSum += x * x;
        ySum  += y;
        yySum += y * y;
        xySum += x * y;
        
        setPulse(true);

        if (n >= 2) {
            const period = y / x;
            const xx = n * xxSum - xSum * xSum;
            const a = (n * xySum - xSum * ySum) / xx;  // Slope
            const b = (ySum * xxSum - xSum * xySum) / xx;  // Intercept
            let computedTempo = Number((60000 / a).toFixed(3));
            computedTempo = Math.round(computedTempo);

            periodPrev = period;
            aPrev = a;
            bPrev = b;
            setTempo(computedTempo);
        }
    }, [beatTimes]);

    return(
        <div className={`tap-tempo page`}>
            <Screen pulse={pulse} display={tempo} />
            <div className='btn__wrapper'>
                <div className={`${pulse ? 'pulsar-bottom' : ''} btn__ring btn__ring--down`}></div>
                <div className={`${pulse ? 'pulsar-up' : ''} btn__ring btn__ring--up`}></div>
                <button 
                    onClick={handleTap} 
                    className={`${pulse ? 'pulsar-buzzer' : ''} btn__buzzer`}>
                </button>
                <button onClick={handleReset} className='btn__reset'>RESET</button>
            </div>
        </div>
    );
};

export default TapTempo