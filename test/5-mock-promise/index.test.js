import { describe, jest } from '@jest/globals';
import { getData } from './index';

const user = {
  name: 'John',
  age: 30,
};

describe('Test promise function', () => {
  test('getData returns the correct data after a delay', async () => {
    jest.useFakeTimers();

    const dataPromise = getData();

    jest.runAllTimers();

    const resData = await dataPromise;

    expect(resData).toEqual(user);

    jest.useRealTimers();
  });
});
