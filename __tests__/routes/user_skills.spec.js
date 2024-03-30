const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const UserSkill = require('../../models/user_skill'); // Adjust the path accordingly

// Connect to a test database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Clear the test database before each test
beforeEach(async () => {
  await UserSkill.deleteMany();
});

// Close the database connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('UserSkill Model', () => {
  it('should create a new user skill', async () => {
    const userSkillData = {
      userSkillID: 1,
      userID: 123,
      skillID: 456,
      skillLevel: 'beginner',
      isTeachable: 'y',
      isLearnable: 'n',
    };

    const newUserSkill = await UserSkill.create(userSkillData);

    expect(newUserSkill.userSkillID).toEqual(userSkillData.userSkillID);
    expect(newUserSkill.userID).toEqual(userSkillData.userID);
    expect(newUserSkill.skillID).toEqual(userSkillData.skillID);
    expect(newUserSkill.skillLevel).toEqual(userSkillData.skillLevel);
    expect(newUserSkill.isTeachable).toEqual(userSkillData.isTeachable);
    expect(newUserSkill.isLearnable).toEqual(userSkillData.isLearnable);
  });

  it('should not allow creating a user skill without required fields', async () => {
    const userSkillData = {
      userID: 123,
      skillID: 456,
      skillLevel: 'beginner',
      isTeachable: 'y',
      isLearnable: 'n',
    };

    let error;
    try {
      await UserSkill.create(userSkillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toContain('userSkillID');
  });

  it('should not allow creating a user skill with incorrect skillLevel value', async () => {
    const userSkillData = {
      userSkillID: 1,
      userID: 123,
      skillID: 456,
      skillLevel: 'invalid_level',
      isTeachable: 'y',
      isLearnable: 'n',
    };

    let error;
    try {
      await UserSkill.create(userSkillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.skillLevel).toBeDefined();
  });

  it('should not allow creating a user skill with incorrect isTeachable value', async () => {
    const userSkillData = {
      userSkillID: 1,
      userID: 123,
      skillID: 456,
      skillLevel: 'beginner',
      isTeachable: 'invalid_value',
      isLearnable: 'n',
    };

    let error;
    try {
      await UserSkill.create(userSkillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.isTeachable).toBeDefined();
  });

  it('should not allow creating a user skill with incorrect isLearnable value', async () => {
    const userSkillData = {
      userSkillID: 1,
      userID: 123,
      skillID: 456,
      skillLevel: 'beginner',
      isTeachable: 'y',
      isLearnable: 'invalid_value',
    };

    let error;
    try {
      await UserSkill.create(userSkillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.isLearnable).toBeDefined();
  });
});
