# CSE341-WebDev-proj2-members

This is my project 2 for CSE341 Web Services - Winter 2024 BYU-I

As the serving Ward Clerk I have been tasked with prayerful assigning prayers for our weekly Sacrament Meetings. I have decided to make an simple API that will allow me to query MonogoDB for all members, a single member to see the last date they offered a prayer, and for a list of memebers that havent offered a prayer since the query date. These will be the differnt GET requests with query parameters.

The POSTS request will add a new member to the DB to allow for move ins.
The PUTS request will allow me to update the date the last prayer was offered.
The DELETE request will allow me to remove a member from the DB to allow for move outs.

As a strech and dependent on time I may include extra GET requests to for when the last talk in Sacrament Meeting was offered to assist the Bishopric.
