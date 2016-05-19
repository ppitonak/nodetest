let expect = require('chai').expect;

describe('Dummy unit tests', function() {

  it('should correctly compute sum of 1 and 1', function() {
      expect(1+1).to.equal(2);
  });
  
  it('should correctly compute sum of 2 and 4', function() {
      expect(2+4).to.equal(6);
  });

  it('should correctly compute product of 2 and 3', function() {
      expect(2*3).to.equal(6);
  });

});
