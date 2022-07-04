import React from 'react';
import renderer, { create, act } from 'react-test-renderer';
import Intro from '../src/utils/Intro';
import MyScreen from '../src/utils/MyScreen';

const tree = create(<MyScreen />)

// Snapshot Test
//import { Flatlist, Text } from 'react-native';

test('renders correctly', () => {
    const tree = renderer.create(<Intro />).toJSON();
    expect(tree).toMatchSnapshot();
});

// Snapshot Test for Flatlist

// it('renders the Flatlist component', () => {
//     const tree = renderer.create(
//         <Flatlist
//             data={['Item1', 'Item2', 'Item3']}
//             keyExtractor={item => item}
//             renderItem={({ item }) => <Text>{item}</Text>}
//         />
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });

test('button pressed', () => {
    // press the button
    const button = tree.root.findByProps({ testID: "myButton" }).props;
    act(() => button.onPress());

    // expect text to equal "button pressed"
    const text = tree.root.findByProps({ testID: "myText" }).props;
    expect(text.children).toEqual("button pressed");

});