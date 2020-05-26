import React from 'react';
import { render, fireEvent  } from '@testing-library/react';

import Button from './Button';

let wrapped = null;

describe('Test Button', () => {
    const clickMock = jest.fn();
    beforeEach(() => {
        wrapped = render(<Button onClick={clickMock} />);
    });

    test('Should exists one instance off Button', () => {
        const { getByRole } = wrapped;
        expect(getByRole('button')).toBeTruthy();
    });

    test('Should component receive one click', () => {
        const { getByRole } = wrapped;
        fireEvent.click(getByRole('button'));
        expect(clickMock.mock.calls.length).toBe(1);
    });
});
