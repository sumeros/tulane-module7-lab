const { add, subtract } = require('./math');

describe('Math functions', () => {
  it('should add numbers', () => {
    const sum = add(2, 3);
    expect(sum).toBe(5);
  });

  it('should subtract numbers', () => {
    const diff = subtract(5, 2);
    expect(diff).toBe(3);
  });
});
