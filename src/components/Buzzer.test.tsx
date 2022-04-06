import { mount, ReactWrapper } from 'enzyme'
import Buzzer from './Buzzer'

describe('### Buzzer test suite ###', () => {
    const buzzerProps = {
        clickDelegation: jest.fn(),
    }

    test('Renders Buzzer component', () => {
        const wrapper = mount(<Buzzer {...buzzerProps}/>);
    });
})