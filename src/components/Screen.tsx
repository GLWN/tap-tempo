import { FC } from 'react'

interface ScreenProps {
    display: number;
    pulse: boolean;
}

const Screen: FC<ScreenProps> = ({display, pulse}) => {
    // const waitingText = '(ツ)';
    const waitingText = '...';
    // const waitingText = '(^=◕ᴥ◕=^)';
    // const waitingText = '(｡◕‿◕｡)';
    // const waitingText = '{•̃_•̃}';
    return(
        <div className={`${pulse ? 'pulsar-screen' : ''} screen`}>
            {display === 0 
                ? <span>{waitingText}</span> 
                : display
            }
            
        </div>
    );
};

export default Screen