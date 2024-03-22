const chunkArray = require('./chunk');

test('My function should return chunked array', () => {
    const arr = [1, 2, 3, 4, 5];
    const len = 2;
    const chunkedArr = chunkArray(arr, len);

    expect(chunkedArr).toEqual([[1, 2], [3, 4], [5]]);
})