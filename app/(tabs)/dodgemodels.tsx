import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DodgeModels() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dodge Models</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  backButton: {
    backgroundColor: '#0033a0',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10
  },
  backText: {
    color: '#fff',
    fontSize: 18
  },
});
