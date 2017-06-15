-- List the names of all NFL teams
SELECT * FROM teams;

--List the stadium name and head coach of all NFC teams
--neither works!
SELECT stadium, head_coach FROM teams WHERE conference = NFC;
SELECT * FROM stadium, head_coach WHERE conference = NFC;

--List the head coaches of the AFC South
--doesn't work
SELECT * FROM head_coach WHERE conference = AFC;

--The total number of players in the NFL
SELECT COUNT(*) FROM players;

--The 50 players with the highest salaries
SELECT * FROM players ORDER BY salary DESC;

--The average salary of all NFL players
nfl=# SELECT AVG(*) FROM salary;
ERROR:  relation "salary" does not exist
LINE 1: SELECT AVG(*) FROM salary;
                        ^

