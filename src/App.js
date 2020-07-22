import React, { useState } from 'react';
import Square from './components/Square';
import { CheckWinner } from './components/checkWinner';

const App = () => {
  console.log('App ran');
  const [squares, setSquares] = useState([]);
  let winner = '';

  const [sign, setSign] = useState('X');

  const returnSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        currentSign={sign}
        whenClicked={() => {
          squares[i] = sign;
          setSquares[i] = sign;
          sign === 'X' ? setSign('O') : setSign('X');
        }}
      />
    );
  };

  const checkWinner = () => {
    const isThereAWinner = CheckWinner(squares);
    if (isThereAWinner) {
      sign === 'X' ? (winner = 'O') : (winner = 'X');
      console.log('winner is', isThereAWinner);
    }
  };

  return (
    checkWinner(),
    (
      <div>
        <h1>{winner ? winner + ' wins' : 'nothing yet'}</h1>
        <h2>{winner ? 'refresh to play again' : null}</h2>
        <div style={{ display: 'flex' }}>
          {returnSquare(0)}
          {returnSquare(1)}
          {returnSquare(2)}
        </div>
        <div style={{ display: 'flex' }}>
          {returnSquare(3)}
          {returnSquare(4)}
          {returnSquare(5)}
        </div>
        <div style={{ display: 'flex' }}>
          {returnSquare(6)}
          {returnSquare(7)}
          {returnSquare(8)}
        </div>
      </div>
    )
  );
};

export default App;
