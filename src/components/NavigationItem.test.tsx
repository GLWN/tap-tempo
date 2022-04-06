import { mount, ReactWrapper } from 'enzyme'
import NavigationItem from './NavigationItem'

describe('### NavigationItem test suite ###', () => {
    let wrapper: ReactWrapper;

    const navigationProps = {
        id: 1,
        title: "test",
        active: true,
        customClickEvent: jest.fn()
    };

    beforeEach(() => {
        wrapper = mount(<NavigationItem {...navigationProps}/>);
    });

    test('Render NavigationItem component', () => {
        const element = wrapper.find('[data-test="test-nav-item"]');
        expect(element.length).toEqual(1);
    });

    test('Set item to active', () => {
        const element = wrapper.find('li');
        expect(element.hasClass('nav__item--active')).toBe(true);
    });

    test('Trigger customClickEvent function', () => {
        const element = wrapper.find('button');
        element.simulate('click');
        expect(navigationProps.customClickEvent).toHaveBeenCalled();
    });
})