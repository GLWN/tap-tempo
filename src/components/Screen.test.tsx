import { mount, ReactWrapper } from 'enzyme'
import Screen from './Screen'

describe('### Screen test suite ###', () => {
    const screenProps = {
        display: 120,
    }
    test('Renders Screen component', () => {
        const wrapper = mount(<Screen {...screenProps}/>);
    });
})