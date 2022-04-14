import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  return <MapView style={styles.map} />;
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
