var add = require('./add.js');
var expect = require('chai').expect;

describe('�ӷ������Ĳ���', function() {
  it('1 �� 1 Ӧ�õ��� 2', function() {
    expect(add(3, -3)).to.be.equal(0);
  });
});