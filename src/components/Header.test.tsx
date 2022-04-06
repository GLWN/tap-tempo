import { shallow, ShallowWrapper } from 'enzyme'
import Header from './Header'

describe('### Header test suite ###', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    test('Render the Header component', () => {});

    test('Display the Header title', () => {
        const element = wrapper.find('[data-test="header_title"]');
        expect(element.length).toEqual(1);
    });
})