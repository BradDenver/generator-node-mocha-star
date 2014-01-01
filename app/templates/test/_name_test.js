'use strict';

var <%= slugname %> = require('../lib/<%= slugname %>.js');


<%= assertionGuide %>


<% if(props.assertionLib==='assert'){ %>

var assert = require('assert');

suite('AwesomenessTest', function(){
  test('#awesome()', function(done){
    assert.equal(<%= slugname %>.awesome(), 'awesome');
    done();
  });
  test('is pending implementation');
});

<% } else if(props.assertionLib==='chai-assert'){ %>

var assert = require('chai').assert;

suite('AwesomenessTest', function(){
  test('#awesome()', function(done){
    assert.equal(<%= slugname %>.awesome(), 'awesome');
    done();
  });
  test('is pending implementation');
});

<% } else if(props.assertionLib==='chai-expect'){ %>

var expect = require('chai').expect;

describe('AwesomenessTest', function () {
  it('should return awesome from #awesome()', function () {
    expect(<%= slugname %>.awesome()).to.equal('awesome');
  });
  it('is pending implementation');
});

<% } else if(props.assertionLib==='chai-should'){ %>

/*jshint expr: true*/
var should = require('chai').should();

// by testing for the existance of should we prevent jshint throwing: 'should' is defined but never used.
describe('Should Assertion Test', function () {
  it('should have a should variable', function () {
    should.exist(should);
  });
});

describe('AwesomenessTest', function () {
  it('should return awesome from #awesome()', function () {
    <%= slugname %>.awesome().should.equal('awesome');
  });
  it('is pending implementation');
});

<% } else if(props.assertionLib==='expect.js'){ %>

var expect = require('expect.js');

describe('AwesomenessTest', function () {
  it('should return awesome from #awesome()', function () {
    expect(<%= slugname %>.awesome()).to.equal('awesome');
  });
  it('is pending implementation');
});

<% } else if(props.assertionLib==='should.js'){ %>

/*jshint expr: true*/
var should = require('should');

// by testing for the existance of should we prevent jshint throwing: 'should' is defined but never used.
describe('Should Assertion Test', function () {
  it('should have a should variable', function () {
    should.exist(should);
  });
});

describe('AwesomenessTest', function(){
  it('should return awesome from #awesome()', function(done){
    <%= slugname %>.awesome().should.equal('awesome');
    done();
  });
  it('is pending implementation');
});

<% } %>
