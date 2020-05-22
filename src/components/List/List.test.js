import React from 'react';
import { shallow, mount } from 'enzyme';

import List from './index';

let wrapper = null;


describe('Test List', () => {
    beforeEach(() => {
        wrapper = mount(<List />);
    });

    test('Should exists one intance of List', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    test('Should have 3 elements li', () => {
        expect(wrapper.find('li').length).toEqual(3);
    });

});