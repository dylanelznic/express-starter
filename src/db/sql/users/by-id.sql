/*
    Select a User record by id
*/
SELECT *
FROM Users
WHERE id = ($1)
