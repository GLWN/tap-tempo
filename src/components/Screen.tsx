import { FC } from 'react'

interface IScreen {
    display: number;
}

const Screen: FC<IScreen> = (props) => {
    return(
        <div className='screen'>
            {props.display}
        </div>
    );
};

export default Screen