import { mount, ReactWrapper } from 'enzyme'
import TapTempo from './TapTempo'
import Screen from './Screen'
import Buzzer from './Buzzer'
import { getLeadingCommentRanges } from 'typescript'

describe('### TapTempo test suite ###', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<TapTempo />);
    });

    test('Renders TapTempo component', () => {});

    //TAP TEMPO has two components : Screen and Buzzer

    test('Render Screen component', () => {
        const element = wrapper.find(Screen);
        expect(element.length).toEqual(1);
    });

    test('Render Buzzer component with tap btn and reset btn', () => {
        const element = wrapper.find(Buzzer).find('button');
        expect(element.length).toEqual(2);
    });

    //BUZZER 

    // test('Start clock on Buzzer click', () => {
    //     const element = wrapper.find(Buzzer).find('button');
    //     element.simulate('click');
    // });
})