'use strict';

var <%= slugname %> = require('../lib/<%= slugname %>.js');


<%= assertionGuide %>


<% if(props.assertionLib==='expect.js'){ %>

var expect = require('expect.js');

describe('AwesomenessTest', function () {
  it('shoud return awesome from #awesome()', function () {
    expect(<%= slugname %>.awesome()).to.equal('awesome');
  });
});

<% } %>

/*var assert = require('assert');

suite('AwesomenessTest', function(){
  test('#awesome()', function(done){
    assert.equal(<%= slugname %>.awesome(), 'awesome');
    done();
  });
});*/
