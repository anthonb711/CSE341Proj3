const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;
  let dbName = "SkillSwap";

  beforeAll(async () => {
    connection = await MongoClient.connect(globalThis.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(globalThis.dbName);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should connect to SkillSwap', async () => {
    expect(db).toEqual(dbName);
  });
});







/*function sum(x, y){
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
});*/