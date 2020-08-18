import expressPino from 'express-pino-logger';
import pino from 'pino';

/** Initialize pino logger */
export const logger = pino({ level: 'info' });

/** Initialize express pino logger */
export const expressLogger = expressPino({ logger });
