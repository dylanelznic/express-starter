/*
    Select a users record by id
*/
SELECT *
FROM Users
WHERE id = ($1)
