
function sum(x, y){
    return x + y;
}

describe("Sum Function", () => { 
    //test stuff
    test("it should add 1 & 2", ()=> {
        
        //Define inputs and expected output give said inputs
        const input1 = 1;
        const input2 = 2;
        const output = 3;

        // The "expect() is the actual test"
        expect(sum(input1, input2)).toEqual(output);
    });
});