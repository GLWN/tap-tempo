import { FC } from 'react'

interface ScreenProps {
    display: number;
}

const Screen: FC<ScreenProps> = (props) => {
    return(
        <div className='screen'>
            {props.display}
        </div>
    );
};

export default Screen