import React from 'react';
import { render } from '@testing-library/react-native';
import HistoryPage from '../../Views/HistoryPage';

describe('HistoryPage', () => {
    test('displays correct page title', () => {
      const { getByText } = render(<HistoryPage />);
      
      const pageTop3 = getByText('TOP 3');
      
      expect(pageTop3).toBeTruthy();
    });
  
});