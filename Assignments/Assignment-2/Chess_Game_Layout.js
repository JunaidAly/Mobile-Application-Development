import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';

const ChessGameLayout = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.fontsize}>Chess Game Layout</Text>
      <View style={styles.chessboard}>
       
        {renderChessboardRows()}
      </View>
    </View>
  );
};

const renderChessboardRows = () => {
  const rows = [];
  const gridSize = 8; // Size of the chessboard (8x8)

  for (let i = 0; i < gridSize; i++) {
    rows.push(
      <View key={i} style={styles.chessboardRow}>
        {/* Render chessboard cells */}
        {renderChessboardCells(i)}
      </View>
    );
  }

  return rows;
};

const renderChessboardCells = (rowIndex) => {
  const cells = [];
  const gridSize = 8; // Size of the chessboard (8x8)

  for (let j = 0; j < gridSize; j++) {
    const isWhite = (rowIndex + j) % 2 === 0; // Alternate between white and black cells
    cells.push(
      <View
        key={j}
        style={[styles.chessboardCell, { backgroundColor: isWhite ? 'white' : 'black' }]}
      />
    );
  }

  return cells;
};

const styles = StyleSheet.create({
    fontsize:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:50
    }
    ,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chessboard: {
    width: 400,
    height: 400,
  },
  chessboardRow: {
    flex: 1,
    flexDirection: 'row',
  },
  chessboardCell: {
    flex: 1,
  },
});

export default ChessGameLayout;
