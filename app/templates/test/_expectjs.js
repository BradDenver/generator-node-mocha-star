/*
  ======== A Handy Little Mocha, expect.js Reference ========
  https://github.com/visionmedia/mocha/
  https://github.com/LearnBoost/expect.js

  Test assertions:
    // ok: asserts that the value is truthy or not
    expect(1).to.be.ok();

    // be/equal: asserts === equality
    expect(1).to.be(1);
    expect(NaN).not.to.equal(NaN);
    expect(1).not.to.be(true);

    // eql: asserts loose equality that works with objects
    expect({ a: 'b' }).to.eql({ a: 'b' });

    // a/an: asserts typeof with support for array type and instanceof
    expect(5).to.be.a('number');
    expect([]).to.be.an('array');
    expect(5).to.be.a(Number);

    // match: asserts String regular expression match
    expect(program.version).to.match(/[0-9]+\.[0-9]+\.[0-9]+/);

    // contain: asserts indexOf for an array or string
    expect([1, 2]).to.contain(1);
    expect('hello world').to.contain('world');

    // length: asserts array .length
    expect([1,2,3]).to.have.length(3);

    // empty: asserts that an array is empty or not
    expect([]).to.be.empty();
    expect({}).to.be.empty();
    expect([1,2,3]).to.not.be.empty();

    // property: asserts presence of an own property (and value optionally)
    expect({a: 'b'}).to.have.property('a');
    expect(window).to.have.property('expect', expect);

    // key/keys: asserts the presence of a key. Supports the only modifier
    expect({ a: 'b' }).to.have.key('a');
    expect({ a: 'b', c: 'd' }).to.only.have.keys('a', 'c');
    expect({ a: 'b', c: 'd' }).to.not.only.have.key('a')

    // throwException/throwError: asserts that the Function throws or not when called
    expect(fn).to.throwError();
    expect(fn2).to.not.throwException();

    // withArgs: creates anonymous function to call fn with arguments
    expect(fn).withArgs(invalid, arg).to.throwException();

    // within: asserts a number within a range
    expect(1).to.be.within(0, Infinity);

    // greaterThan/above: asserts >
    expect(3).to.be.above(0);
    expect(5).to.be.greaterThan(3);

    //lessThan/below: asserts <
    expect(0).to.be.below(3);
    expect(1).to.be.lessThan(3);

    // fail: explicitly forces failure
    expect().fail()


    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/