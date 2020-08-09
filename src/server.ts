import 'module-alias/register';

import app from './app';

/** Start server and begin listening on the specified port */
app.listen(3000, async () => {
  console.log(`Server now listening on port ${3000}!`);
});
