describe.skip('Mocks', () => {
  it("should mock return true", () => {
    const validateMock = jest.fn(() => {
      return true
    });
  });

  it("should mock return false", () => {
    const validateMock = jest.fn(() => {
      return false
    });
  });
});