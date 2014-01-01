/*
  ======== A Handy Little Mocha, Chai-Should Reference ========
  https://github.com/visionmedia/mocha/
  http://chaijs.com/api/bdd/

  Please be aware that the should style has some caveats and additional tools to overcome the caveats.
  http://chaijs.com/guide/styles/#should

  Language Chains:
    to, be, been, is, that, and, have, with, at, of, same

  Test assertions:
    // .not - Negates any of assertions following in the chain
    foo.should.not.equal('bar');

    // .deep - Sets the deep flag, later used by the equal and property assertions
    foo.should.deep.equal({ bar: 'baz' });

    // .a(type) - The a and an assertions are aliases that can be used either as language chains or to assert a value's type
    foo.should.be.a('string');
    foo.should.be.an.instanceof(Foo);

    // .include(value) - The include and contain assertions can be used as either property based language chains or as
    methods to assert the inclusion of an object in an array or a substring in a string. When used as language chains,
    they toggle the contain flag for the keys assertion.
    [1,2,3].should.include(2);
    ('foobar').should.contain('foo');
    ({ foo: 'bar', hello: 'universe' }).should.include.keys('foo');

    // .ok - Asserts that the target is truthy
    ('everthing').should.be.ok;
    false.should.not.be.ok;

    // .true / .false / .null / .undefined - Asserts that the target is true/false/null/undefined
    true.should.be.true;
    (1).should.not.be.true;
    false.should.be.false;
    (0).should.not.be.false;
    should.equal(null, null);
    should.not.equal(undefined, null);
    should.equal(undefined, undefined);
    should.not.equal(null, undefined);

    // .exist - Asserts that the target is neither null nor undefined
    should.exist(foo);
    should.not.exist(bar);

    // .empty - Asserts that the target's length is 0. For arrays, it checks the length property. For objects, it gets the count of enumerable keys
    [].should.be.empty;

    // .arguments - Asserts that the target is an arguments object
    function test () { arguments.should.be.arguments; }

    // .equal(value) - Asserts that the target is strictly equal (===) to value. Alternately, if the deep flag is set, asserts that the target is deeply equal to value
    ('hello').should.equal('hello');
    (1).should.not.equal(true);
    ({ foo: 'bar' }).should.deep.equal({ foo: 'bar' });

    // .eql(value) - Asserts that the target is deeply equal to value.
    ({ foo: 'bar' }).should.eql({ foo: 'bar' });

    // .above(value) / .least(value) / .below(value) / .most(value) - Asserts that the target is greater than/greater than or equal to/ less than/less than or equal to value
    (10).should.be.above(5);
    [ 1, 2, 3 ].should.have.length.above(2);
    (10).should.be.at.least(10);
    [ 1, 2, 3 ].should.have.length.of.at.least(3);
    (5).should.be.below(10);
    ('foo').should.have.length.below(4);
    (5).should.be.at.most(5);
    ('foo').should.have.length.of.at.most(4);

    // .within(start, finish) - Asserts that the target is within a range
    (7).should.be.within(5,10);
    ('foo').should.have.length.within(2,4);

    // .instanceof(constructor) - Asserts that the target is an instance of constructor
    [ 1, 2, 3 ].should.be.instanceof(Array);

    // .property(name, [value]) - Asserts that the target has a property name, optionally asserting that the value of that property is strictly equal to value
    (obj).should.have.property('foo');
    (obj).should.have.property('foo', 'bar');
    (deepObj).should.have.deep.property('green.tea', 'matcha');
    (obj).should.have.property('foo').that.is.a('string');

    // .ownProperty(name) - Asserts that the target has an own property name
    ('test').should.have.ownProperty('length');

    // .length(value) - Asserts that the target's length property has the expected value
    [ 1, 2, 3].should.have.length(3);
    [ 1, 2, 3 ].should.have.length.above(2);

    // .match(regexp) - Asserts that the target matches a regular expression
    ('foobar').should.match(/^foo/);

    // .string(string) - Asserts that the string target contains another string
    ('foobar').should.have.string('bar');

    // .keys(key1, [key2], [...]) - Asserts that the target has exactly the given keys, or asserts the inclusion of some keys when using the include or contain modifiers
    ({ foo: 1, bar: 2 }).should.have.keys(['foo', 'bar']);
    ({ foo: 1, bar: 2, baz: 3 }).should.contain.keys('foo', 'bar');

    // .throw(constructor) - Asserts that the function target will throw a specific error, or specific type of error (as determined using instanceof), optionally with a RegExp or string inclusion test for the error's message
    should.throw(fn, Error);
    should.throw(fn, /bad function/);
    should.not.throw(fn, 'good function');
    should.throw(fn, ReferenceError, /bad function/);

    // .respondTo(method) - Asserts that the object or class target will respond to a method. To check if a constructor will respond to a static function, set the itself flag
    Klass.should.respondTo('bar');
    Klass.should.itself.respondTo('baz');

    // .itself - Sets the itself flag, later used by the respondTo assertion
    Foo.should.itself.not.respondTo('baz');

    // .satisfy(method) - Asserts that the target passes a given truth test
    (1).should.satisfy(function(num) { return num > 0; });

    // .closeTo(expected, delta) - Asserts that the target is equal expected, to within a +/- delta range
    (1.5).should.be.closeTo(1, 0.5);

    // .members(set) - Asserts that the target is a superset of set, or that the target and set have the same members
    [1, 2, 3].should.include.members([3, 2]);
    [4, 2].should.have.members([2, 4]);


    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/