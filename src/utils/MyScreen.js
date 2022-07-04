import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const MyScreen = () => {
    const [status, setStatus] = useState('');
    return (
        <View>
            <Text testID="myText">{status}</Text>
            <Button testID="myButton" onPress={() => setStatus('button pressed')} title="Press Me" />
        </View>
    );
};

export default MyScreen;