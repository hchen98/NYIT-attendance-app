import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function searchScreen({navigation}){
  navigation.setOptions({ title: 'Search Screen' })
  return (
    <View style={styles.buttonBar_itme}>
        <Text>This is search panel!</Text>
        <Text>Coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBar_itme: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
});