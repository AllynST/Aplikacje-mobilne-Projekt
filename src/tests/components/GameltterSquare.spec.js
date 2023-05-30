import React from 'react';
import { render} from '@testing-library/react-native';
import GameLetterSquare from './../../Components/GameLetterSquare';


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



