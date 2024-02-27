import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

// SVG code
const LogoSVG = `
  <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier">
      <path d="M416 425.6l78.4 44.8c9.6 6.4 16 16 16 27.2v91.2c0 11.2-6.4 22.4-16 27.2L416 662.4c-9.6 6.4-22.4 6.4-32 0l-78.4-44.8c-9.6-6.4-16-16-16-27.2v-91.2c0-11.2 6.4-22.4 16-27.2l78.4-44.8c9.6-8 22.4-8 32-1.6z" fill="#2CC5EF"/>
      <path d="M643.2 267.2c-3.2-1.6-4.8-1.6-8 0l-67.2 38.4c-3.2 1.6-3.2 4.8-3.2 6.4v76.8c0 3.2 1.6 4.8 3.2 6.4l67.2 38.4c3.2 1.6 4.8 1.6 8 0l67.2-38.4c3.2-1.6 3.2-4.8 3.2-6.4v-76.8c0-3.2-1.6-4.8-3.2-6.4l-67.2-38.4z m9.6-12.8l67.2 38.4c8 4.8 12.8 12.8 12.8 20.8v76.8c0 8-4.8 16-12.8 20.8l-67.2 38.4c-8 4.8-16 4.8-24 0l-67.2-38.4c-8-4.8-12.8-12.8-12.8-20.8v-76.8c0-8 4.8-16 12.8-20.8l67.2-38.4c6.4-4.8 16-4.8 24 0zM688 691.2l-67.2 38.4v76.8l67.2 38.4 67.2-38.4v-76.8L688 691.2z m83.2 9.6c9.6 6.4 16 16 16 27.2v76.8c0 11.2-6.4 22.4-16 27.2L704 873.6c-9.6 6.4-22.4 6.4-32 0l-67.2-38.4c-9.6-6.4-16-16-16-27.2v-76.8c0-11.2 6.4-22.4 16-27.2l67.2-38.4c9.6-6.4 22.4-6.4 32 0l67.2 35.2zM176 169.6v44.8l40 22.4 40-22.4v-44.8l-40-22.4-40 22.4zM275.2 144c8 4.8 12.8 12.8 12.8 20.8v54.4c0 8-4.8 16-12.8 20.8l-48 27.2c-8 4.8-16 4.8-24 0l-48-27.2c-6.4-4.8-11.2-12.8-11.2-20.8v-54.4c0-8 4.8-16 12.8-20.8l48-27.2c8-4.8 16-4.8 24 0L275.2 144zM192 777.6l-48 27.2v54.4l48 27.2 48-27.2v-54.4l-48-27.2z m8-14.4l48 27.2c4.8 3.2 8 8 8 14.4v54.4c0 6.4-3.2 11.2-8 14.4l-48 27.2c-4.8 3.2-11.2 3.2-16 0l-48-27.2c-4.8-3.2-8-8-8-14.4v-54.4c0-6.4 3.2-11.2 8-14.4l48-27.2c4.8-3.2 11.2-3.2 16 0z" fill="#050D42"/>
      <path d="M403.2 776l-62.4 62.4c-1.6 1.6-3.2 1.6-6.4 1.6h-88c-4.8 0-8-3.2-8-8s3.2-8 8-8h84.8l59.2-59.2v-68.8c0-4.8 3.2-8 8-8s8 3.2 8 8v64H576c4.8 0 8 3.2 8 8s-3.2 8-8 8H403.2z m-11.2-436.8l-108.8-94.4c-3.2-3.2-3.2-8-1.6-11.2 3.2-3.2 8-3.2 11.2-1.6l110.4 94.4H528c4.8 0 8 3.2 8 8s-3.2 8-8 8h-120V400c0 4.8-3.2 8-8 8s-8-3.2-8-8v-60.8zM800 728c-4.8 0-8-3.2-8-8s3.2-8 8-8h88c4.8 0 8 3.2 8 8s-3.2 8-8 8H800z m-49.6-435.2c-3.2 3.2-8 3.2-11.2 1.6-3.2-3.2-3.2-8-1.6-11.2l96-112c3.2-3.2 8-3.2 11.2-1.6 3.2 3.2 3.2 8 1.6 11.2l-96 112zM160 504c-4.8 0-8-3.2-8-8s3.2-8 8-8h112c4.8 0 8 3.2 8 8s-3.2 8-8 8h-112z m536 144c0 4.8-3.2 8-8 8s-8-3.2-8-8V544c0-4.8 3.2-8 8-8s8 3.2 8 8v104z" fill="#050D42"/>
    </g>
  </svg>
`;

const loadFont = () => {
  return Font.loadAsync({
    'karma-regular': require('./assets/fonts/Karma-Regular.ttf'),
    'karma-bold': require('./assets/fonts/Karma-Bold.ttf'),
    'karma-light': require('./assets/fonts/Karma-Light.ttf'),
    'karma-semibold': require('./assets/fonts/Karma-SemiBold.ttf'),
    'karma-medium': require('./assets/fonts/Karma-Medium.ttf'),
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFont().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#2CC5EF', '#147691', '#061215']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* SVG inserted here */}
        <View dangerouslySetInnerHTML={{ __html: LogoSVG }} style={{ width: 200, height: 200 }} />
        <Text style={[styles.karmaBold, { fontSize: 35 }]}>Algorithmia</Text>
        <Text style={[styles.karmaRegular, { fontSize: 18 }]}>Discover your inner analytics with Algorithmia</Text>
        <Text style={[styles.karmaLight, { fontSize: 15 }]}>Knapsack, Selection Sorting, TSP, and String Matching - Your playground awaits!</Text>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  karmaRegular: {
    fontFamily: 'karma-regular',
    marginBottom: 10,
    color: '#E4F2F6',
    textAlign: 'center',
  },
  karmaLight: {
    fontFamily: 'karma-light',
    marginBottom: 10,
    color: '#E4F2F6',
    textAlign: 'center',
  },
  karmaBold: {
    fontFamily: 'karma-bold',
    marginBottom: 10,
    color: '#E4F2F6',
    textAlign: 'center',
  },
});

