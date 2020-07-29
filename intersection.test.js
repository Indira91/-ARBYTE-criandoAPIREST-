const intersection = require("./intersection");

test("should return [1, 3] when passed [1,2,3,4,5] and [6,7,1,3,10]", () => {
    const result = intersection ([1, 2, 3, 4, 5], [6, 7, 1, 3, 10]);
    expect (result).toEqual([1, 3])
});

test("should return [] when passed [1,2,3,4,5] and [6,7,8,9,10]", () => {
    const result = intersection ([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
    expect (result).toHaveLength(0);
});

test("should return [] when passed [1,2,3, 3, 4,5] and [6,7,8,9,10]", () => {
    const result = intersection ([1, 2, 3, 3, 4, 5], [6, 7, 8, 9, 10]);
    expect (result).toHaveLength(0);
})