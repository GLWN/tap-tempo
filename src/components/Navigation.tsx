import React, {useState} from 'react'
import NavigationItem from './NavigationItem'

const appList = [
    {
        id: 1,
        title: 'TAP TEMPO',
        color: 'pink'
    },
    {
        id: 2,
        title: 'METRONOME',
        color: 'pink'
    },
    {
        id: 3,
        title: 'LAB',
        color: 'grey'
    },
]

const Navigation:React.FC = () => {
    const [selectedNavItemId, setSelectedNavItemId] = useState<number>(1);

    const handleClick = (id: number): void => {
        setSelectedNavItemId(id);
    }

    return(
        <ul className='nav'>
            { appList && appList.map((appItem) => (
                <NavigationItem 
                    key={appItem.id}
                    id={appItem.id}
                    title={appItem.title}
                    active = {appItem.id === selectedNavItemId}
                    customClickEvent={() => handleClick(appItem.id)}
                />
            ))}
        </ul>
    );
}

export default Navigation