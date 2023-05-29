import React from 'react';
import { render } from '@testing-library/react-native';
import AboutPage from '../../Views/AboutPage';

describe('AboutPage', () => {
  test('renders correctly', () => {
    const { getByText} = render(<AboutPage />);
    
    const mainHeader = getByText('Instructions:');
    const secondaryHeader = getByText('Guess the word in 6 tries.');
    const howToPlayHeader = getByText('How to play:');
    const exampleHeader = getByText('Example:');
    const correctListItem = getByText('The letter is correct and in the right place');
    const warningListItem = getByText('The letter is correct but not in the right place');

    
    expect(mainHeader).toBeTruthy();
    expect(secondaryHeader).toBeTruthy();
    expect(howToPlayHeader).toBeTruthy();
    expect(exampleHeader).toBeTruthy();
    expect(correctListItem).toBeTruthy();
    expect(warningListItem).toBeTruthy();

  });
  
  // Add more tests if needed
});
