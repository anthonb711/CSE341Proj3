# SkillSwap: Community Skill Exchange API

## SkillSwap (BYUI CSE341Proj3) is a collaborative effort for the final team project for CSE341 Web Services

### Overview

SkillSwap is a community-driven app designed to facilitate the exchange of skills in a barter-like system. Users can offer skills they are proficient in and seek out new skills they wish to learn. The platform ensures an equitable exchange by requiring users to teach a session before they can learn again, maintaining a balanced teaching-learning ratio.

### Features

- **User Profiles:** Create detailed profiles with offered and desired skills, availability, and contact information for remote learning sessions.
- **Availabilities:** Connects users based on shared learning interests and availability schedules.
- **Feedback Mechanism:** Post-session feedback ensures the quality and reliability of teaching sessions.
- **Security and Privacy:** Personal information is protected and shared only with confirmed matches.

### Data Structure

#### User Profile

- `userID`: Unique identifier for each user.
- `firstName`: User's first name.
- `lastName`: User's last name (optional, for privacy).
- `teamsID`: Microsoft Teams ID for remote sessions.
- `email`: Contact email address.

#### Skills

- `skillID`: Unique identifier for each skill.
- `skillName`: Name of the skill (e.g., Python Programming, Graphic Design).
- `category`: Broader category of the skill (e.g., Technology, Art).
- `description`: Brief description of the skill.

#### User Skills

- `userSkillID`: Unique identifier for each user-skill mapping.
- `userID`: Link to the User Profile.
- `skillID`: Link to the Skills.
- `skillLevel`: User's proficiency level in the skill (e.g., Beginner, Intermediate, Advanced).
- `isTeachable`: Boolean indicating if the user is willing to teach this skill.
- `isLearnable`: Boolean indicating if the user wants to learn this skill.

#### Availabilities

- `availabilityID`: Unique identifier for each availability slot.
- `userID`: Link to the User Profile.
- `startTime`: Start time of the availability slot.
- `endTime`: End time of the availability slot.
- `isBooked`: Boolean indicating if the slot is booked.

#### Sessions

- `sessionID`: Unique identifier for each teaching/learning session.
- `tutorID`: User ID of the tutor.
- `learnerID`: User ID of the learner.
- `skillID`: Skill being taught.
- `sessionTime`: Timestamp for the session.
- `teamsMeetingLink`: Microsoft Teams link for the remote session.

#### Feedbacks

- `feedbackID`: Unique identifier for each feedback entry.
- `sessionID`: Link to the Sessions.
- `fromUserID`: User ID of the feedback giver.
- `toUserID`: User ID of the feedback receiver.
- `rating`: Numerical rating given.
- `comment`: Optional textual feedback.

### Getting Started

To contribute to SkillSwap, please follow these steps:

1. Clone the repository to your local machine.
2. Set up your development environment.
3. Review the open issues for tasks that need attention.
4. Make your changes in a separate branch and submit a pull request.

### API Contract

https://cse341proj3.onrender.com/api-docs

### Project Team Members

Josh Morris  
Erick Patino  
Anthon Brown  
Chettra Ly
