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
    .notEqual(actual, expected, [message])

    // Asserts strict equality (===) of actual and expected
    .strictEqual(actual, expected, [message])
    .notStrictEqual(actual, expected, [message])

    // Asserts that actual is deeply equal to expected
    .deepEqual(actual, expected, [message])
    .notDeepEqual(actual, expected, [message])

    // Asserts that value is true
    .isTrue(value, [message])
    .isFalse(value, [message])

    // Asserts that value is null
    .isNull(value, [message])
    .isNotNull(value, [message])

    // Asserts that value is undefined
    .isUndefined(value, [message])
    .isDefined(value, [message])

    // Asserts that value is a function
    .isFunction(value, [message])
    .isNotFunction(value, [message])

    // Asserts that value is an object (as revealed by Object.prototype.toString)
    .isObject(value, [message])
    .isNotObject(value, [message])

    // Asserts that value is an array
    .isArray(value, [message])
    .isNotArray(value, [message])

    // Asserts that value is a string
    .isString(value, [message])
    .isNotString(value, [message])

    // Asserts that value is a number
    .isNumber(value, [message])
    .isNotNumber(value, [message])

    // Asserts that value is a boolean
    .isBoolean(value, [message])
    .isNotBoolean(value, [message])

    //Asserts that value's type is name, as determined by Object.prototype.toString
    .typeOf(value, name, [message])
    .notTypeOf(value, name, [message])

    // Asserts that value is an instance of constructor
    .instanceOf(object, constructor, [message])
    .notInstanceOf(object, constructor, [message])

    // Asserts that haystack includes needle. Works for strings and arrays
    .include(haystack, needle, [message])
    .notInclude(haystack, needle, [message])

    // Asserts that value matches the regular expression regexp
    .match(value, regexp, [message])
    .notMatch(value, regexp, [message])

    // Asserts that object has a property named by property
    .property(object, property, [message])
    .notProperty(object, property, [message])


    // Asserts that object has a property named by property, which can be a string using dot- and bracket-notation for deep reference
    .deepProperty(object, property, [message])
    .notDeepProperty(object, property, [message])

    // Asserts that object has a property named by property with value given by value
    .propertyVal(object, property, value, [message])
    .propertyNotVal(object, property, value, [message])

    //Asserts that object has a property named by property with value given by value. property can use dot- and bracket-notation for deep reference
    .deepPropertyVal(object, property, value, [message])
    .deepPropertyNotVal(object, property, value, [message])

    // Asserts that object has a length property with the expected value
    .lengthOf(object, length, [message])

    //Asserts that function will throw an error that is an instance of constructor, or alternately that it will throw an error with message matching regexp
    .throws(function, [constructor/string/regexp], [string/regexp], [message])
    .doesNotThrow(function, [constructor/regexp], [message])

    // Compares two values using operator
    .operator(val1, operator, val2, [message])

    // Asserts that the target is equal expected, to within a +/- delta range
    .closeTo(actual, expected, delta, [message])

    // Asserts that set1 and set2 have the same members. Order is not taken into account
    .sameMembers(set1, set2, [message])

    // Asserts that subset is included in superset. Order is not taken into account
    .includeMembers(superset, subset, [message])
    

    Apart from assert, Mocha allows you to use any of the following assertion libraries:
    - should.js
    - chai
    - expect.js
    - better-assert
*/