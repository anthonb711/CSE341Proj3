# CSE341Proj3 is a collabortive effort for the final team project for CSE341 Web Services.

For the final project, I think it might be interesting to create a community app for skill exchange app called "SkillSwap", somewhat like a barter system for learning and teaching. In this platform, I will create a profile detailing the skills I can offer, the ones I'm eager to learn, my availability, and my Microsoft Teams ID for remote sessions. The platform is built on the principle of equitable exchange, requiring me to teach a session before I can learn again, thereby ensuring a balance in the ratio of teaching to learning to maintain fairness among all users. The focus is on matching users based on shared learning interests and availability. A feedback mechanism after each session will help ensure the quality and reliability of the teaching sessions. With a strong emphasis on security and privacy, my personal information is safeguarded and only shared with confirmed matches.

1. user_profile
   UserID: Unique identifier for each user.
   FirstName: User's first name.
   LastName: User's last name (optional, based on privacy preferences).
   TeamsID: Microsoft Teams ID for remote sessions.
   EmailAddress: Contact email address.
   PasswordHash: Hashed password for secure login.

2. skills
   SkillID: Unique identifier for each skill.
   SkillName: Name of the skill (e.g., Python Programming, Graphic Design).
   Category: Broader category the skill falls under (e.g., Technology, Art).
   Description: A brief description of the skill.

3. user_skills
   UserSkillID: Unique identifier for each user-skill mapping.
   UserID: Link to the User Profile.
   SkillID: Link to the Skills.
   SkillLevel: The user's proficiency level in the skill (e.g., Beginner, Intermediate, Advanced).
   IsTeachable: Boolean indicating if the user is willing to teach this skill.
   IsLearnable: Boolean indicating if the user wants to learn this skill.

4. availabilities
   AvailabilityID: Unique identifier for each availability slot.
   UserID: Link to the User Profile.
   StartTime: Start time of the availability slot.
   EndTime: End time of the availability slot.
   IsBooked: Boolean indicating if the slot is booked.

5. sessions
   SessionID: Unique identifier for each teaching/learning session.
   TutorUserID: User ID of the tutor.
   LearnerUserID: User ID of the learner.
   SkillID: Skill being taught.
   SessionTime: Timestamp for when the session is scheduled.
   TeamsMeetingLink: Microsoft Teams link for the remote session.

6. feedbacks
   FeedbackID: Unique identifier for each feedback entry.
   SessionID: Link to the Sessions.
   FromUserID: User ID of the feedback giver.
   ToUserID: User ID of the feedback receiver.
   Rating: Numerical rating given.
   Comments: Optional textual feedback.
