import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">Welcome to Run Tracker</Text>
      <Button title="Start a Run" onPress={() => navigation.navigate('Run')} />
      <Button title="View Training Plan" onPress={() => navigation.navigate('Training Plan')} />
    </View>
  );
}