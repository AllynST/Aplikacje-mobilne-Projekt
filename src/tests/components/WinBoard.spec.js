import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WinBoard from './../../Components/WinBoard';

describe('WinBoard component', () => {
  const mockGame = {
    isPopupVisible: true,
    hidePopupWindow: jest.fn(),
  };

  const mockNavigation = {
    navigate: jest.fn(),
  };

  test('renders congratulations message when isPopupVisible is true', () => {
    const { getByText } = render(
      <WinBoard game={mockGame} pop={mockNavigation} />
    );

    expect(getByText('Congratulations! You won!')).toBeDefined();
  });

  test('calls hidePopupWindow and navigate when Close button is pressed', () => {
    const { getByText } = render(
      <WinBoard game={mockGame} pop={mockNavigation} />
    );

    const closeButton = getByText('Close');
    fireEvent.press(closeButton);

    expect(mockGame.hidePopupWindow).toHaveBeenCalled();
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Splash');
  });

  test('does not render anything when isPopupVisible is false', () => {
    const { queryByText } = render(
      <WinBoard game={{ ...mockGame, isPopupVisible: false }} pop={mockNavigation} />
    );

    expect(queryByText('Congratulations! You won!')).toBeNull();
  });
});
