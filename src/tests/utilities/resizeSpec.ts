import resized from '../../utilities/resize';

describe('test resize function', () => {
  it('resizes the photo', () => {
    expect(resized).not.toThrowError;
  });
  it('resizes the photo', () => {
    expect(resized('fjord.jpg', 200, 400)).toBeTruthy;
  });
  it('does not resizes the photo', () => {
    expect(resized('', 1, 1)).toBeFalsy;
  });
});
