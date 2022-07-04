import React from 'react';
import renderer, {create, act} from 'react-test-renderer';
import Intro from '../src/utils/Intro';
import MyScreen from '../src/utils/MyScreen';

const sum = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const div = (a, b) => {
  return a / b;
};
const multi = (a, b) => {
  return a * b;
};
test('substracts 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});

test('Multiplies 1 * 2 to equal 2', () => {
  expect(multi(1, 2)).toBe(2);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 10 / 2 to equal 5', () => {
  expect(sum(10, 2)).toBe(5);
});

const tree = create(<MyScreen />);
test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('button pressed', () => {
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());
  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('button pressed');
});
