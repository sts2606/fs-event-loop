import { jest } from '@jest/globals';
import { delayedCallback } from './index';

test('delayedCallback calls the callback after delay', () => {
  const callback = jest.fn();

  jest.useFakeTimers();

  delayedCallback(callback, 3000);

  // delayedCallback(() => {}, 3000);

  expect(callback).not.toHaveBeenCalled();

  jest.runAllTimers();

  expect(callback).toHaveBeenCalled();

  jest.useRealTimers();
});
