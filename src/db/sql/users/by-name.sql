/*
    Select a users record by name
*/
SELECT *
FROM Users
WHERE name = ($1)
