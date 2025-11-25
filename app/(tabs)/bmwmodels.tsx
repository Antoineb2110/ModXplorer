import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BMWModels() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Page Title */}
      <Text style={styles.title}>Select BMW Model</Text>

      {/* Models Grid */}
      <View style={styles.grid}>

        {/* M340 */}
        <TouchableOpacity style={styles.logoBox}>
          <Text style={styles.modelText}>M340</Text>
        </TouchableOpacity>

        {/* 550i */}
        <TouchableOpacity style={styles.logoBox}>
          <Text style={styles.modelText}>550i</Text>
        </TouchableOpacity>

        {/* 330i */}
        <TouchableOpacity style={styles.logoBox}>
          <Text style={styles.modelText}>330i</Text>
        </TouchableOpacity>

      </View>

      {/* Go Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: '#0033a0',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 15,
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  logoBox: {
    backgroundColor: '#6bb5e3ff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 150,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelText: {
    fontSize: 18,
    fontWeight: '700',
  },
  backButton: {
    marginTop: 40,
    backgroundColor: '#2f00ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  backText: {
    color: 'white',
    fontSize: 16,
  },
});

