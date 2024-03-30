const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Skill = require('../../models/skill'); // Adjust the path accordingly

// Connect to a test database
beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Clear the test database before each test
beforeEach(async () => {
  await Skill.deleteMany();
});

// Close the database connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Skill Model', () => {
  it('should create a new skill', async () => {
    const skillData = {
      skillID: 1,
      skillName: 'JavaScript',
      category: 'Programming',
      description: 'A programming language used for web development.',
    };

    const newSkill = await Skill.create(skillData);

    expect(newSkill.skillID).toEqual(skillData.skillID);
    expect(newSkill.skillName).toEqual(skillData.skillName);
    expect(newSkill.category).toEqual(skillData.category);
    expect(newSkill.description).toEqual(skillData.description);
  });

  it('should not allow creating a skill without required fields', async () => {
    const skillData = {
      skillName: 'JavaScript',
      category: 'Programming',
      description: 'A programming language used for web development.',
    };

    let error;
    try {
      await Skill.create(skillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toContain('skillID');
  });

  it('should not allow creating a skill with duplicate skillID', async () => {
    const skillData1 = {
      skillID: 1,
      skillName: 'JavaScript',
      category: 'Programming',
      description: 'A programming language used for web development.',
    };

    const skillData2 = {
      skillID: 1,
      skillName: 'Python',
      category: 'Programming',
      description: 'A programming language used for various purposes.',
    };

    await Skill.create(skillData1);

    let error;
    try {
      await Skill.create(skillData2);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.message).toContain('duplicate key');
  });

  it('should not allow creating a skill with empty skillName', async () => {
    const skillData = {
      skillID: 1,
      skillName: '',
      category: 'Programming',
      description: 'A programming language used for web development.',
    };

    let error;
    try {
      await Skill.create(skillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.skillName).toBeDefined();
  });

  it('should not allow creating a skill with empty category', async () => {
    const skillData = {
      skillID: 1,
      skillName: 'JavaScript',
      category: '',
      description: 'A programming language used for web development.',
    };

    let error;
    try {
      await Skill.create(skillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.category).toBeDefined();
  });

  it('should not allow creating a skill with empty description', async () => {
    const skillData = {
      skillID: 1,
      skillName: 'JavaScript',
      category: 'Programming',
      description: '',
    };

    let error;
    try {
      await Skill.create(skillData);
    } catch (err) {
      error = err;
    }

    expect(error).toBeDefined();
    expect(error.errors.description).toBeDefined();
  });
});
