CMDB API
Listen on port 3000
NO AUTHORIZATION (not intended for production)
ToDo: specify API version

Install (see https://loopback.io/getting-started.html)

1. install Node.js 
(e.g. https://nodejs.org/en/download/package-manager)

2. Install LoopBack 4 CLI
$ npm install -g @loopback/cli

3. Build application
$ cd <installation root>
$ lb4 app cmdb -y
(POSSIBLE ERRORS)
$ cd cmdb 
$ npm install --legacy-peer-deps
$ npm install loopback-connector-postgresql --save

4. Deploy source files (/src/*) from git to <installation root>/cmdb/src/

5. Run
set environment variables for DB access (values below are for example)
ATTENTION! Beware trailing spaces

$ export CMDB_HOST=db-services.dev.adl.nubes.ru
$ export CMDB_PORT=5432
$ export CMDB_LOGIN=cmdb
$ export CMDB_PASSWD=******
$ export CMDB_DBNAME=cmdb

$ cd <installation root>/cmdb
$ npm start
 