import React from 'react';
import { mount } from 'enzyme';
import axios from 'axios';

import ReqAxios from './ReqAxios';
import { act } from 'react-dom/test-utils';

let wrapper = null;

const list = [{
    id: 1,
    name: 'Leanne Graham',
}];

describe('Test ReaAxios', () => {
    beforeEach( async () => {
        axios.get = jest.fn(() => Promise.resolve({ data: list}));
        await act(async () => {
            wrapper = mount(<ReqAxios />);
        })
    });

    test('Should be exists one instance', () => {
       expect(wrapper.exists()).toBeTruthy();
    });

    test('Should be exists one item in list', () => {
        //wrapper.update();
        wrapper.setProps();
        expect(wrapper.find('li').length).toEqual(1);
    });
});
