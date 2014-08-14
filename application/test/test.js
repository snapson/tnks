var expect = require('chai').expect;
var request = require('superagent');
var uri = 'http://localhost:5353';

describe('Tanks component', function() {
  it('should return expected HTML', function(end) {
    request
      .get(uri)
      .end(function(err, res) {
        expect(err).to.not.be.ok;
        expect(res.statusCode).to.equal(200);

        end();
      });
  });
});