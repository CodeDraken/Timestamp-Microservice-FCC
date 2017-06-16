const expect = require('expect');

const { dateParser } = require('../utils/date-parser');

describe('Utils', () => {

  describe('dateParser', () => {

    it('converts a unix string to natural date', () => {
      expect(dateParser(1450137600).natural).toBe('December 14, 2015');
    });

    it('converts a natural date to unix', () => {
      expect(dateParser('December 14, 2015').unix).toBe(1450072800);
    });

  });

});
