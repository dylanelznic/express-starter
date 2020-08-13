import 'module-alias/register';

import { appConfig } from 'config';

import app from './app';

/** Start server and begin listening on the specified port */
app.listen(appConfig.express.port, async () => {
  console.log(`Server now listening on port ${appConfig.express.port}!`);
});
