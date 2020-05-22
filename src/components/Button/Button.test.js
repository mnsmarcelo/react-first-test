import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

let wrapped = null;

describe('Test Button', () => {
    const clickMock = jest.fn();
    beforeEach(() => {
        wrapped = shallow(<Button onClick={clickMock} />);
    });

    test('Should exists one instance off Button', () => {
        expect(wrapped.exists()).toBeTruthy();
    });

    test('Should component receive one click', () => {
        wrapped.find('button').simulate('click');
        expect(clickMock.mock.calls.length).toBe(1);
    });
});
