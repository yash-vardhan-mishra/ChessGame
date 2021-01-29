import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WHITE = 'rgb(100,133,68)';
const BLACK = 'rgb(230,233,198)';

interface RowProps {
  row: number;
}
interface SquareProps extends RowProps {
  col: number;
}

const Square = ({row, col}: SquareProps) => {
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (col + offset) % 2 === 0 ? WHITE : BLACK;
  const color = (col + offset) % 2 === 0 ? BLACK : WHITE;
  const numberOpacity = col === 0 ? 1 : 0;
  const textOpacity = row === 7 ? 1 : 0;
  return (
    <View style={[styles.squareContainer, {backgroundColor}]}>
      <Text style={[styles.squareNumber, {color, opacity: numberOpacity}]}>
        {8 - row}
      </Text>
      <Text style={[styles.squareText, {color, opacity: textOpacity}]}>
        {String.fromCharCode('a'.charCodeAt(0) + col)}
      </Text>
    </View>
  );
};

const Row = ({row}: RowProps) => {
  return (
    <View style={styles.rowContainer}>
      {new Array(8).fill(0).map((_, col) => (
        <Square key={col} row={row} col={col} />
      ))}
    </View>
  );
};

const Background = () => {
  return (
    <View style={styles.backgroundContainer}>
      {new Array(8).fill(0).map((_, i) => (
        <Row key={i} row={i} />
      ))}
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  squareContainer: {
    flex: 1,
    padding: 4,
    justifyContent: 'space-between',
  },
  squareText: {fontWeight: '500', alignSelf: 'flex-end'},
  squareNumber: {fontWeight: '500'},
  rowContainer: {flex: 1, flexDirection: 'row'},
  backgroundContainer: {flex: 1},
});
