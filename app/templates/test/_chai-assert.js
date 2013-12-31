/*
  ======== A Handy Little Mocha, Chai-Assert Reference ========
  https://github.com/visionmedia/mocha/
  http://chaijs.com/api/assert/

  Test assertions:
    // Write your own test expressions.
    assert(expression, message)

    // Throw a failure
    assert.fail(actual, expected, [message], [operator])

    // Asserts that object is truthy.
    assert.ok(object, [message])
    assert.notOk(object, [message])

    // Asserts non-strict equality (==) of actual and expected
    assert.equal(actual, expected, [message])
    assert.notEqual(actual, expected, [message])

    // Asserts strict equality (===) of actual and expected
    assert.strictEqual(actual, expected, [message])
    assert.notStrictEqual(actual, expected, [message])

    // Asserts that actual is deeply equal to expected
    assert.deepEqual(actual, expected, [message])
    assert.notDeepEqual(actual, expected, [message])

    // Asserts that value is true/false/null/undefined
    assert.isTrue(value, [message])
    assert.isFalse(value, [message])
    assert.isNull(value, [message])
    assert.isNotNull(value, [message])
    assert.isUndefined(value, [message])
    assert.isDefined(value, [message])

    // Asserts that value is a function/array/string/number/boolean
    assert.isFunction(value, [message])
    assert.isNotFunction(value, [message])
    assert.isArray(value, [message])
    assert.isNotArray(value, [message])
    assert.isString(value, [message])
    assert.isNotString(value, [message])
    assert.isNumber(value, [message])
    assert.isNotNumber(value, [message])
    assert.isBoolean(value, [message])
    assert.isNotBoolean(value, [message])

    // Asserts that value is an object (as revealed by Object.prototype.toString)
    assert.isObject(value, [message])
    assert.isNotObject(value, [message])

    //Asserts that value's type is name, as determined by Object.prototype.toString
    assert.typeOf(value, name, [message])
    assert.notTypeOf(value, name, [message])

    // Asserts that value is an instance of constructor
    assert.instanceOf(object, constructor, [message])
    assert.notInstanceOf(object, constructor, [message])

    // Asserts that haystack includes needle. Works for strings and arrays
    assert.include(haystack, needle, [message])
    assert.notInclude(haystack, needle, [message])

    // Asserts that value matches the regular expression regexp
    assert.match(value, regexp, [message])
    assert.notMatch(value, regexp, [message])

    // Asserts that object has a property named by property
    assert.property(object, property, [message])
    assert.notProperty(object, property, [message])


    // Asserts that object has a property named by property, which can be a string using dot- and bracket-notation for deep reference
    assert.deepProperty(object, property, [message])
    assert.notDeepProperty(object, property, [message])

    // Asserts that object has a property named by property with value given by value
    assert.propertyVal(object, property, value, [message])
    assert.propertyNotVal(object, property, value, [message])

    //Asserts that object has a property named by property with value given by value. property can use dot- and bracket-notation for deep reference
    assert.deepPropertyVal(object, property, value, [message])
    assert.deepPropertyNotVal(object, property, value, [message])

    // Asserts that object has a length property with the expected value
    assert.lengthOf(object, length, [message])

    //Asserts that function will throw an error that is an instance of constructor, or alternately that it will throw an error with message matching regexp
    assert.throws(function, [constructor/string/regexp], [string/regexp], [message])
    assert.doesNotThrow(function, [constructor/regexp], [message])

    // Compares two values using operator
    assert.operator(val1, operator, val2, [message])

    // Asserts that the target is equal expected, to within a +/- delta range
    assert.closeTo(actual, expected, delta, [message])

    // Asserts that set1 and set2 have the same members. Order is not taken into account
    assert.sameMembers(set1, set2, [message])

    // Asserts that subset is included in superset. Order is not taken into account
    assert.includeMembers(superset, subset, [message])
    

    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/