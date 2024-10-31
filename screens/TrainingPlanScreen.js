import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrainingPlanScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Training Plan</Text>
      {/* Insert mock plan or fetch from Firebase */}
      <Text style={styles.plan}>Run 5K at moderate pace - Week 1</Text>
      <Text style={styles.plan}>Interval training - Week 2</Text>
      {/* Continue adding more weeks */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  plan: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default TrainingPlanScreen;
