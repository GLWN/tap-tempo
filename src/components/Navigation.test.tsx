import { shallow, mount, ReactWrapper } from 'enzyme'
import Navigation from './Navigation'
import NavigationItem from './NavigationItem'

describe('### Navigation test suite ###', () => {
    test('Render navigation wrapper', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper.length).toEqual(1);
    })
});

describe('### Navigation items test suite ###', () => {
    let wrapper: ReactWrapper;
    let element: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<Navigation />);
        element = wrapper.find('NavigationItem');
    })

    test('Render navigation menu with one item', () => {
        expect(element.exists()).toBe(true);
    });

    test('Render default nav item state (first item active)', () => {
        const activeLi = element.at(0).find('li').hasClass('nav__item--active');
        expect(activeLi).toBe(true);
    });

    test('Render default nav item state (second item inactive)', () => {
        const activeLi = element.at(1).find('li').hasClass('nav__item--active');
        expect(activeLi).toBe(false);
    });
    
    test('Render item menu active on second button click', () => {
        const button = element.at(1).find('button');
        button.simulate('click');
        // uncaching element
        expect(wrapper.find('NavigationItem').at(1).find('li').hasClass('nav__item--active')).toBe(true);
    });

});