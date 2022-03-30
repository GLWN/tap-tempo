import { FC, useState } from 'react'
import Screen from './Screen'
import Buzzer from './Buzzer'

const TapTempo = () => {
    const [tempo, setTempo] = useState(0);

    const handleButtonClick = (computedTempo: number) => {
        // const tempoVal = isReset ? 0 : computedTempo;
        setTempo(computedTempo);
    };

    return(
        <div className='taptempo page'>
            <Screen display={tempo} />
            <Buzzer clickDelegation={handleButtonClick} />
        </div>
    )
}

export default TapTempo