import React from 'react';
import { View, Text } from 'react-native';

const TrainingPlanScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">Your Training Plan</Text>
      {/* Insert mock plan or fetch from Firebase */}
      <Text className="mt-4">Run 5K at moderate pace - Week 1</Text>
      <Text>Interval training - Week 2</Text>
      {/* Continue adding more weeks */}
    </View>
  );
};

export default TrainingPlanScreen;