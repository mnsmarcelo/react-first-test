import React from 'react';
import { mount } from 'enzyme';

import WithState from './WithState';

let wrapper =  null;

describe('Test WithState', () => {
    beforeEach(() => {
        wrapper = mount(<WithState />)
    });

    test('Should exist one instance of WithState', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    test('Should be change state after click', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        wrapper.update();
        expect(button.text()).toBe('Verdadeiro');
    });
});
