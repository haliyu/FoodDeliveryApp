/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,SafeAreaView, View } from 'react-native';

 import Home from './screens/Home';
import Restaurant from './screens/Restaurant';

const App = () => {
  

  return (
    <View style={styles.container} >
      <Restaurant />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
}
});

export default App;
