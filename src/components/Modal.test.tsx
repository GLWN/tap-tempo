import { shallow, ShallowWrapper } from 'enzyme'
import Modal from './Modal'

describe('### Modal test suite ###', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Modal />);
    });

    test('Render the Modal component', () => {});
})