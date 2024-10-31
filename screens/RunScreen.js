import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'react-native-location';

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

      subscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (loc) => {
          setLocation(loc.coords);
          // Placeholder: You can calculate and update the distance here
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
    <View style={styles.container}>
      <Text style={styles.title}>Tracking your Run</Text>
      <Text>Distance: {distance.toFixed(2)} meters</Text>
      <Button title={tracking ? "Stop" : "Start"} onPress={() => setTracking(!tracking)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
