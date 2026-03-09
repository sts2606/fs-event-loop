import { describe } from '@jest/globals';
import { getData } from './index';

const user = {
  name: 'John',
  age: 30,
};

describe('Test promise function no fake timers', () => {
  test('getData returns the correct data after a delay', async () => {
    await expect(getData()).resolves.toEqual(user);
  });
});
