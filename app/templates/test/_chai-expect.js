/*
  ======== A Handy Little Mocha, Chai-Assert Reference ========
  https://github.com/visionmedia/mocha/
  http://chaijs.com/api/bdd/

  Language Chains:
    to, be, been, is, that, and, have, with, at, of, same

  Test assertions:
    // .not - Negates any of assertions following in the chain
    expect(foo).to.not.equal('bar');

    // .deep - Sets the deep flag, later used by the equal and property assertions
    expect(foo).to.deep.equal({ bar: 'baz' });

    // .a(type) - The a and an assertions are aliases that can be used either as language chains or to assert a value's type
    expect('test').to.be.a('string');
    expect(foo).to.be.an.instanceof(Foo);

    // .include(value) - The include and contain assertions can be used as either property based language chains or as
    methods to assert the inclusion of an object in an array or a substring in a string. When used as language chains,
    they toggle the contain flag for the keys assertion.
    expect([1,2,3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

    // .ok - Asserts that the target is truthy
    expect('everthing').to.be.ok;
    expect(false).to.not.be.ok;

    // .true / .false / .null / .undefined - Asserts that the target is true/false/null/undefined
    expect(true).to.be.true;
    expect(1).to.not.be.true;
    expect(false).to.be.false;
    expect(0).to.not.be.false;
    expect(null).to.be.null;
    expect(undefined).not.to.be.null;
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;

    // .exist - Asserts that the target is neither null nor undefined
    expect(foo).to.exist;
    expect(bar).to.not.exist;

    // .empty - Asserts that the target's length is 0. For arrays, it checks the length property. For objects, it gets the count of enumerable keys
    expect([]).to.be.empty;

    // .arguments - Asserts that the target is an arguments object
    function test () { expect(arguments).to.be.arguments; }

    // .equal(value) - Asserts that the target is strictly equal (===) to value. Alternately, if the deep flag is set, asserts that the target is deeply equal to value
    expect('hello').to.equal('hello');
    expect(1).to.not.equal(true);
    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });

    // .eql(value) - Asserts that the target is deeply equal to value.
    expect({ foo: 'bar' }).to.eql({ foo: 'bar' });

    // .above(value) / .least(value) / .below(value) / .most(value) - Asserts that the target is greater than/greater than or equal to/ less than/less than or equal to value
    expect(10).to.be.above(5);
    expect([ 1, 2, 3 ]).to.have.length.above(2);
    expect(10).to.be.at.least(10);
    expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
    expect(5).to.be.below(10);
    expect('foo').to.have.length.below(4);
    expect(5).to.be.at.most(5);
    expect('foo').to.have.length.of.at.most(4);

    // .within(start, finish) - Asserts that the target is within a range
    expect(7).to.be.within(5,10);
    expect('foo').to.have.length.within(2,4);

    // .instanceof(constructor) - Asserts that the target is an instance of constructor
    expect([ 1, 2, 3 ]).to.be.instanceof(Array);

    // .property(name, [value]) - Asserts that the target has a property name, optionally asserting that the value of that property is strictly equal to value
    expect(obj).to.have.property('foo');
    expect(obj).to.have.property('foo', 'bar');
    expect(deepObj).to.have.deep.property('green.tea', 'matcha');
    expect(obj).to.have.property('foo').that.is.a('string');

    // .ownProperty(name) - Asserts that the target has an own property name
    expect('test').to.have.ownProperty('length');

    // .length(value) - Asserts that the target's length property has the expected value
    expect([ 1, 2, 3]).to.have.length(3);
    expect([ 1, 2, 3 ]).to.have.length.above(2);

    // .match(regexp) - Asserts that the target matches a regular expression
    expect('foobar').to.match(/^foo/);

    // .string(string) - Asserts that the string target contains another string
    expect('foobar').to.have.string('bar');

    // .keys(key1, [key2], [...]) - Asserts that the target has exactly the given keys, or asserts the inclusion of some keys when using the include or contain modifiers
    expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
    expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');

    // .throw(constructor) - Asserts that the function target will throw a specific error, or specific type of error (as determined using instanceof), optionally with a RegExp or string inclusion test for the error's message
    expect(fn).to.throw(Error);
    expect(fn).to.throw(/bad function/);
    expect(fn).to.not.throw('good function');
    expect(fn).to.throw(ReferenceError, /bad function/);

    // .respondTo(method) - Asserts that the object or class target will respond to a method. To check if a constructor will respond to a static function, set the itself flag
    expect(Klass).to.respondTo('bar');
    expect(Klass).itself.to.respondTo('baz');

    // .itself - Sets the itself flag, later used by the respondTo assertion
    expect(Foo).itself.not.to.respondTo('baz');

    // .satisfy(method) - Asserts that the target passes a given truth test
    expect(1).to.satisfy(function(num) { return num > 0; });

    // .closeTo(expected, delta) - Asserts that the target is equal expected, to within a +/- delta range
    expect(1.5).to.be.closeTo(1, 0.5);

    // .members(set) - Asserts that the target is a superset of set, or that the target and set have the same members
    expect([1, 2, 3]).to.include.members([3, 2]);
    expect([4, 2]).to.have.members([2, 4]);


    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/