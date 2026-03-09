import { describe, expect, jest } from '@jest/globals';
import { getData } from './index';

describe('Test throws error', () => {
  test('getData throws error', async () => {
    expect(getData).toThrow('Something went wrong');
  });
});
