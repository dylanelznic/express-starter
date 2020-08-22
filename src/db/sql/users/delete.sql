/*
    Delete a users record
*/
DELETE FROM users
WHERE id = ($1)
