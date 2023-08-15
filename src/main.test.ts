import { add, sub } from './main';

describe('Utility | Main', () => {
  it('add - should add the given two numbers', async () => {
    expect(add(4, 2)).toEqual(6);
  });

  it('sub - should subtract the given two numbers', async () => {
    expect(sub(4, 2)).toEqual(2);
  });
});
