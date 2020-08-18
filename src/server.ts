import 'module-alias/register';

import { appConfig } from 'config';
import { logger } from 'utils';

import app from './app';

/** Start server and begin listening on the specified port */
app.listen(appConfig.express.port, async () => {
  logger.info(`Server now listening on port ${appConfig.express.port}!`);
});
