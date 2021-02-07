import { RemoveDotPipe } from './remove-dot.pipe';

describe('RemoveDotPipe', () => {
  const pipe = new RemoveDotPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should without dot', () => {
    const value = 'test.';
    expect(pipe.transform(value)).toBe('test');
  });
});
