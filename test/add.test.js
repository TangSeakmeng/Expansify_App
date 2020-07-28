const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('show add two numbers', () => {
    const result = add(3, 4);

    // if(result != 7)
    //     throw new Error(`You added 3 and 4. The result was ${result}. Expect 7.`)

    expect(result).toBe(7);
});

test('show correct greeting', () => {
    expect(generateGreeting('LopsidedAxis')).toBe('Hello LopsidedAxis!') 
})

test('show anonymous greeting', () => {
    expect(generateGreeting()).toBe('Hello Anonymous!') 
})