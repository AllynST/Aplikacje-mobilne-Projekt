import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import TableComponent from './../../Components/HistoryTable';
import { GetHistory, TopThreeAvg } from './../../GameLogic/helpers';

jest.mock('./../../GameLogic/helpers', () => ({
  GetHistory: jest.fn(),
  TopThreeAvg: jest.fn(),
}));

describe('TableComponent', () => {
    const mockData = [
      { name: 'John', word: 'apple', tries: 5 },
      { name: 'Jane', word: 'banana', tries: 3 },
      { name: 'Mike', word: 'cherry', tries: 7 },
    ];
  
    const mockTop = [['Johne', 4.5], ['Janee', 3.2], ['Mikee', 6.8]];
  
    beforeEach(() => {
      GetHistory.mockClear();
      TopThreeAvg.mockClear();
      GetHistory.mockResolvedValue(mockData);
      TopThreeAvg.mockReturnValue(mockTop);
    });
  
    test('renders top 3 players', async () => {
      const { getByText, queryByText } = render(<TableComponent />);
      await waitFor(() => expect(GetHistory).toHaveBeenCalled());
  
      expect(getByText('TOP 3')).toBeDefined();
      expect(getByText('John')).toBeDefined();
      expect(getByText('4.5')).toBeDefined();
      expect(getByText('Jane')).toBeDefined();
      expect(getByText('3.2')).toBeDefined();
      expect(getByText('Mike')).toBeDefined();
      expect(getByText('6.8')).toBeDefined();
  
  
    });
  
  });