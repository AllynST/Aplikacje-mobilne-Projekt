import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SplashScreen from '../../Views/SplashScreen';

describe('SplashScreen', () => {

  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<SplashScreen />);

    expect(getByText('Wordly')).toBeTruthy();
    expect(getByPlaceholderText('Please enter your nickname')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  test('calls handleContinue function on button press', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const { getByText, getByPlaceholderText } = render(
      <SplashScreen navigation={navigationMock} />
    );

    const input = getByPlaceholderText('Please enter your nickname');
    const nextButton = getByText('Next');

    fireEvent.changeText(input, 'John');
    fireEvent.press(nextButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home', { nickname: 'John' });
  });

  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<SplashScreen />);

    expect(getByText('Wordly')).toBeTruthy();
    expect(getByPlaceholderText('Please enter your nickname')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  test('calls handleContinue function on button press', () => {
    const navigationMock = {
      navigate: jest.fn(),
    };
    const { getByText, getByPlaceholderText } = render(
      <SplashScreen navigation={navigationMock} />
    );

    const input = getByPlaceholderText('Please enter your nickname');
    const nextButton = getByText('Next');

    fireEvent.changeText(input, 'John');
    fireEvent.press(nextButton);

    expect(navigationMock.navigate).toHaveBeenCalledWith('Home', { nickname: 'John' });
  });

  test('updates nickname state on input change', () => {
    const { getByPlaceholderText } = render(<SplashScreen />);

    const input = getByPlaceholderText('Please enter your nickname');

    fireEvent.changeText(input, 'John');

    expect(input.props.value).toBe('John');
  });

 
  // Add more tests for different scenarios
});