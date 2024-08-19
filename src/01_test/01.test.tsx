import {mul, splitInfoWords, sum} from "./01";

test('sum should be correct', () => {
//data
    let a = 1;
    let b = 2;
    let c = 3;
//action
    const result = sum(a, b);

    //expect result
    expect(result).toBe(3);

})
test('mul should be correct', () => {
//data
    let a = 1;
    let b = 2;
    let c = 3;
//action
    const result1 = mul(a, b);

    //expect result
    expect(result1).toBe(2);

    const result2 = mul(c, b);

    //expect result
    expect(result2).toBe(6);
})


test('splitting into words ', () => {
    //data
const sent1 = "Hello my friends"
const sent2 = "ToraDora is my favorite Olala"
//action
    const result1 = splitInfoWords(sent1)
    const result2 = splitInfoWords(sent2)
    //expect result
    expect (result1.length).toBe(3);
expect(result1[0]).toBe('Hello');
expect(result1[1]).toBe('my');
expect(result1[2]).toBe('friends');

expect (result2.length).toBe(5);
expect(result2[0]).toBe('ToraDora');
expect(result2[1]).toBe('is');
expect(result2[2]).toBe('my');
    expect(result2[3]).toBe('favorite');
    expect(result2[4]).toBe('Olala');
})




export {}