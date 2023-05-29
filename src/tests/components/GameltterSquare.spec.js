import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameLetterSquare from './../../Components/GameLetterSquare';
import { StyleSheet, Text } from 'react-native';

describe('GameLetterSquare', () => {
  const mockLetterBox = {
    letter: 'A',
    state: 'active',
  };

  test('renders letter', () => {
    const { getByText } = render(<GameLetterSquare letterBox={mockLetterBox} />);
    const letterElement = getByText('A');
    expect(letterElement).toBeDefined();
  });

 

});



