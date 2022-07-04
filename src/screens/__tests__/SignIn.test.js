import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import SignIn from '../SignIn';

it('Rnder default elements', () => {
  const {getAllByText, getByPlaceholderText} = render(<SignIn />);

  expect(getAllByText('Login').length).toBe(2);
  getByPlaceholderText('Username');
  getByPlaceholderText('Password');
});

it('checks invalid input messages', () => {
  const {getByTestId, getByText} = render(<SignIn />);

  fireEvent.press(getByTestId('SignIn.Button'));

  getByText('Invalid username.');
  getByText('Invalid password.');
});

it('will show invalid user name error message', () => {
  const {getByTestId, getByText, queryAllByText} = render(<SignIn />);

  fireEvent.changeText(getByTestId('SignIn.passwordInput'), '123_sample');

  fireEvent.press(getByTestId('SignIn.Button'));

  getByText('Invalid username.');
  expect(queryAllByText('Invalid password.').length).toBe(0);

  fireEvent.changeText(getByTestId('SignIn.usernameInput'), 'invalid input');

  getByText('Invalid username.');
  expect(queryAllByText('Invalid password.').length).toBe(0);
});

it('shows invalid password error message', () => {
  const {getByTestId, getByText, queryAllByText} = render(<SignIn />);

  fireEvent.changeText(getByTestId('SignIn.usernameInput'), 'sample123');

  fireEvent.press(getByTestId('SignIn.Button'));

  getByText('Invalid password.');
  expect(queryAllByText('Invalid username.').length).toBe(0);

  fireEvent.changeText(getByTestId('SignIn.passwordInput'), 'invalid input');

  getByText('Invalid password.');
  expect(queryAllByText('Invalid username.').length).toBe(0);
});
