import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameKeyboard from './../../Components/GameKeyboard';

describe('GameKeyboard', () => {
  const mockGame = {
    addLetterToRow: jest.fn(),
    removeLetter: jest.fn(),
    submitRow: jest.fn(),
  };

  const mockRenderHandler = jest.fn();

  test('renders keyboard squares', () => {
    const { getByText } = render(
      <GameKeyboard game={mockGame} renderHandler={mockRenderHandler} />
    );

    const letterA = getByText('A');
    expect(letterA).toBeDefined();

    const letterQ = getByText('Q');
    expect(letterQ).toBeDefined();

    const letterEnter = getByText('Enter');
    expect(letterEnter).toBeDefined();
  });

  test('calls addLetterToRow when a letter is pressed', () => {
    const { getByText } = render(
      <GameKeyboard game={mockGame} renderHandler={mockRenderHandler} />
    );

    const letterA = getByText('A');
    fireEvent.press(letterA);
    expect(mockGame.addLetterToRow).toHaveBeenCalledWith('A');
    expect(mockRenderHandler).toHaveBeenCalledTimes(1);
  });

  test('calls removeLetter when the backspace button is pressed', () => {
    const { getByText } = render(
      <GameKeyboard game={mockGame} renderHandler={mockRenderHandler} />
    );

    const backspaceButton = getByText('<--');
    fireEvent.press(backspaceButton);
    expect(mockGame.removeLetter).toHaveBeenCalledTimes(1);
    expect(mockRenderHandler).toHaveBeenCalledTimes(2);
  });

  test('calls submitRow when the enter button is pressed', () => {
    const { getByText } = render(
      <GameKeyboard game={mockGame} renderHandler={mockRenderHandler} />
    );

    const enterButton = getByText('Enter');
    fireEvent.press(enterButton);
    expect(mockGame.submitRow).toHaveBeenCalledTimes(1);
    expect(mockRenderHandler).toHaveBeenCalledTimes(3);
  });
});



