# Express Starter 🏁

A boilerplate for quickly creating servers using Node.js, Express, and pg-promise.

## File Structure

```
├── config           // Environment variables and other configuration
├── db               // Data access layer
│   ├── repos        // pg-promise extensions
│   ├── sql          // SQL queries
│   └── types.ts     // Interface models
├── routes           // API Routes
├── services         // Business logic
├── utils            // Utility classes & functions
├── app.ts           // Express app intialization
└── server.ts        // App entry point
```

## Quickstart

Clone the repo into your local environment

```
git clone git@github.com:dylanelznic/express-starter.git
```

Install dependencies

```
npm install
```

Set up your environment variables as outlined in `.env.example`

```
# Database Variables
DB_HOST=        // ex: localhost
DB_PORT=        // ex: 5432
DB_DATABASE=    // ex: my_app_db
DB_USER=        // ex: dylanelznic
DB_PASSWORD=    // ex: hunter2

# Express Variables
PORT=           // ex: 3000
```

Set up your database using Flyway to run migrations – these options can be set within the `flyway.conf` file or exported via terminal

```
export FLYWAY_URL=          // ex: jdbc:postgresql://localhost:5432/dev_poop
export FLYWAY_USER=         // ex: dylan
export FLYWAY_PASSWORD=     // ex: hunter2
export FLYWAY_LOCATIONS=    // ex: filesystem:.
```

`flyway migrate`

Run the app in development mode

```
npm run dev
```
