import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Chess} from 'chess.js';
import Background from './Background';

const {width} = Dimensions.get('window');

const Board = () => {
  return (
    <View style={styles.container}>
      <Background />
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});
