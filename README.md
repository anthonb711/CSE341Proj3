# SkillSwap: Community Skill Exchange API

# SkillSwap (BYUI CSE341Proj3) is a collaborative effort for the final team project for CSE341 Web Services

## Overview

SkillSwap is a community-driven app designed to facilitate the exchange of skills in a barter-like system. Users can offer skills they are proficient in and seek out new skills they wish to learn. The platform ensures an equitable exchange by requiring users to teach a session before they can learn again, maintaining a balanced teaching-learning ratio.

## Features

- **User Profiles:** Create detailed profiles with offered and desired skills, availability, and contact information for remote learning sessions.
- **Availabiilities:** Connects users based on shared learning interests and availability schedules.
- **Feedback Mechanism:** Post-session feedback ensures the quality and reliability of teaching sessions.
- **Security and Privacy:** Personal information is protected and shared only with confirmed matches.

## Data Structure

### User Profile

- `UserID`: Unique identifier for each user.
- `FirstName`: User's first name.
- `LastName`: User's last name (optional, for privacy).
- `TeamsID`: Microsoft Teams ID for remote sessions.
- `EmailAddress`: Contact email address.

### Skills

- `SkillID`: Unique identifier for each skill.
- `SkillName`: Name of the skill (e.g., Python Programming, Graphic Design).
- `Category`: Broader category of the skill (e.g., Technology, Art).
- `Description`: Brief description of the skill.

### User Skills

- `UserSkillID`: Unique identifier for each user-skill mapping.
- `UserID`: Link to the User Profile.
- `SkillID`: Link to the Skills.
- `SkillLevel`: User's proficiency level in the skill (e.g., Beginner, Intermediate, Advanced).
- `IsTeachable`: Boolean indicating if the user is willing to teach this skill.
- `IsLearnable`: Boolean indicating if the user wants to learn this skill.

### Availabilities

- `AvailabilityID`: Unique identifier for each availability slot.
- `UserID`: Link to the User Profile.
- `StartTime`: Start time of the availability slot.
- `EndTime`: End time of the availability slot.
- `IsBooked`: Boolean indicating if the slot is booked.

### Sessions

- `SessionID`: Unique identifier for each teaching/learning session.
- `TutorUserID`: User ID of the tutor.
- `LearnerUserID`: User ID of the learner.
- `SkillID`: Skill being taught.
- `SessionTime`: Timestamp for the session.
- `TeamsMeetingLink`: Microsoft Teams link for the remote session.

### Feedbacks

- `FeedbackID`: Unique identifier for each feedback entry.
- `SessionID`: Link to the Sessions.
- `FromUserID`: User ID of the feedback giver.
- `ToUserID`: User ID of the feedback receiver.
- `Rating`: Numerical rating given.
- `Comments`: Optional textual feedback.

## Getting Started

To contribute to SkillSwap, please follow these steps:

1. Clone the repository to your local machine.
2. Set up your development environment.
3. Review the open issues for tasks that need attention.
4. Make your changes in a separate branch and submit a pull request.

## API Contract

https://cse341proj3.onrender.com/api-docs
