import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

export default function RunScreen() {
  const [location, setLocation] = useState(null);
  const [distance, setDistance] = useState(0);
  const [tracking, setTracking] = useState(false);

  useEffect(() => {
    let subscription;
    const startTracking = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
        return;
      }
      subscription = Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (loc) => {
          setLocation(loc.coords);
          // Calculate and update distance here
        }
      );
    };

    if (tracking) startTracking();
    else if (subscription) subscription.remove();

    return () => {
      if (subscription) subscription.remove();
    };
  }, [tracking]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl">Tracking your Run</Text>
      <Text>Distance: {distance.toFixed(2)} meters</Text>
      <Button title={tracking ? "Stop" : "Start"} onPress={() => setTracking(!tracking)} />
    </View>
  );
}