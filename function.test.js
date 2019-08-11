let functions = require('./function');
test("I am computer engineering",()=>{
    expect("hello world").not.toMatch(/I/);
});

// test('User fetched name should be Leanne Graham', async () =>{
//     expect.assertion(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
// });