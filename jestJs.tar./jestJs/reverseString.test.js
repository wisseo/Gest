const reverseString = require('./reverseString');

test('my function should return reversed string', () => {
    expect(reverseString('hello')).toEqual('olleh');
})