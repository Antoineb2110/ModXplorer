import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SecondScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Page Title */}
      <Text style={styles.title}>Select Make</Text>

      {/* Grid of logos */}
   <View style={styles.grid}>
  {/* Infiniti */}
  <TouchableOpacity 
    style={styles.logoBox}
    onPress={() => router.push('/infinitimodels')}
  >
    <Image 
      source={require('../../assets/images/infiniti-1-logo-png-transparent.png')} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </TouchableOpacity>

  {/* BMW */}
  <TouchableOpacity 
    style={styles.logoBox}
    onPress={() => router.push('/bmwmodels')}
  >
    <Image 
      source={require('../../assets/images/BMW_logo_(gray).svg.png')} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </TouchableOpacity>

  {/* Chevrolet */}
  <TouchableOpacity 
    style={styles.logoBox}
    onPress={() => router.push('/chevymodels')}
  >
    <Image 
      source={require('../../assets/images/chevrolet-logo-png_seeklogo-29488.png')} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </TouchableOpacity>

  {/* Dodge */}
  <TouchableOpacity 
    style={styles.logoBox}
    onPress={() => router.push('/dodgemodels')}
  >
    <Image 
      source={require('../../assets/images/Dodge_black_logo.svg')} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </TouchableOpacity>

  {/* Ford */}
  <TouchableOpacity 
    style={styles.logoBox}
    onPress={() => router.push('/fordmodels')}
  >
    <Image 
      source={require('../../assets/images/Ford_logo_flat.svg.png')} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </TouchableOpacity>

  {/* Audi */}
  <TouchableOpacity 
    style={styles.logoBox} 
    onPress={() => router.push('/audimodels')}
  >
    <Image 
      source={require('../../assets/images/audi-logo-3.png')} 
      style={styles.logo} 
      resizeMode="contain" 
    />
  </TouchableOpacity>
</View>



      {/* Optional Go Back Button */}
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
  logo: {
    width: '90%',
    height: '90%',
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

