import { getType } from './index';

test('getType correctly identifies data types', () => {
  expect(getType(123)).toBe('number');
  expect(getType('test')).toBe('string');
  expect(getType({})).toBe('object');
  expect(getType([])).toBe('object');
  expect(getType(null)).toBe('object');
  expect(getType(undefined)).toBe('undefined');
});
