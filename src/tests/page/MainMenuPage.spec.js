import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MainMenu from '../../Views/MainMenu';

describe('MainMenu', () => {
  test('renders correctly', () => {
    const nickname = 'John';
    const { getByText } = render(<MainMenu route={{ params: { nickname } }} />);
    
    expect(getByText('Wordle')).toBeTruthy();
    expect(getByText(`Current player: ${nickname}`)).toBeTruthy();
    expect(getByText('Play now!')).toBeTruthy();
    expect(getByText('About')).toBeTruthy();
    expect(getByText('History')).toBeTruthy();
    expect(getByText('Tomasz Rożnowski & Łukasz Zaraska')).toBeTruthy();
  });
  
  test('navigates to GamePage on "Play now!" button press', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const nickname = 'John';
    const { getByText } = render(
      <MainMenu navigation={navigationMock} route={{ params: { nickname } }} />
    );
    
    const playNowButton = getByText('Play now!');
    fireEvent.press(playNowButton);
    
    expect(navigationMock.navigate).toHaveBeenCalledWith('GamePage', { nickname });
  });
  
  test('navigates to AboutPage on "About" button press', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const routeMock = {
      params: {
        nickname: 'John',
      },
    };
    const { getByText } = render(
      <MainMenu navigation={navigationMock} route={routeMock} />
    );
    
    const aboutButton = getByText('About');
    fireEvent.press(aboutButton);
    
    expect(navigationMock.navigate).toHaveBeenCalledWith('AboutPage');
  });
  test('navigates to HistoryPage on "History" button press', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const routeMock = {
      params: {
        nickname: 'John',
      },
    };
    const { getByText } = render(<MainMenu navigation={navigationMock} route={routeMock} />);
    
    const historyButton = getByText('History');
    fireEvent.press(historyButton);
    
    expect(navigationMock.navigate).toHaveBeenCalledWith('HistoryPage');
  });
  
  
  
  // Add more tests for different scenarios
});
