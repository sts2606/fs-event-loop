import { getFormattedDate } from './index';

test('getFormattedDate always return same date', () => {
  const ORIGINAL_DATE = global.Date;

  global.Date = class extends Date {
    constructor() {
      super();
    }

    getDate() {
      return 9;
    }

    getMonths() {
      return 2;
    }

    getFullYear() {
      return 2026;
    }
  };

  expect(getFormattedDate()).toBe('09-03-2026');

  global.Date = ORIGINAL_DATE;
});
