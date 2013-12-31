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
  it('shoud return awesome from #awesome()', function () {
    expect(<%= slugname %>.awesome()).to.equal('awesome');
  });
  it('is pending implementation');
});

<% } else if(props.assertionLib==='expect.js'){ %>

var expect = require('expect.js');

describe('AwesomenessTest', function () {
  it('shoud return awesome from #awesome()', function () {
    expect(<%= slugname %>.awesome()).to.equal('awesome');
  });
  it('is pending implementation');
});

<% } else if(props.assertionLib==='should.js'){ %>

/*var should = */require('should');

describe('AwesomenessTest', function(){
  it('shoud return awesome from #awesome()', function(done){
    <%= slugname %>.awesome().should.equal('awesome');
    done();
  });
  it('is pending implementation');
});

<% } %>
