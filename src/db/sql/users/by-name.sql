/*
    Select a User record by name
*/
SELECT *
FROM Users
WHERE name = ($1)
