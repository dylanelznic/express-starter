/** Environment variables for Express */
export interface ExpressVariables {
  port: string;
}

/** Environment variables for the app */
export interface AppVariables {
  express: ExpressVariables;
}

/** Evnironment variables for the DB */
export interface DBVariables {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}
