import { FC, MouseEvent } from 'react'

interface NavigationItemProps {
    id: number;
    title: string;
    color?: string;
    active: boolean;
    customClickEvent: (id: number) => void;
}

const NavigationItem: FC<NavigationItemProps> = ({title, id, active, customClickEvent}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        customClickEvent(id);
    }
    return(
        <li className = {`nav__item${active ? '--active' : ''}`}>
            <button
                data-test = 'test-nav-item' 
                onClick = {event => handleClick(event)}
            >
                {title}
            </button>
        </li>
    )
}

export default NavigationItem