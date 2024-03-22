const isAnagram= require('./anagram');

test('my function should return true if anagram', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy();
})

test('my function should return false if not anagram', () => {
    expect(isAnagram('elbow', 'belows')).toBeFalsy();
})