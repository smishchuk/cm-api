import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'cm',
  connector: 'postgresql',
  url: '', //alternatively, we could use single DB URL instead of 5 variables
  host: process.env.CMDB_HOST,
  port: process.env.CMDB_PORT,
  user: process.env.CMDB_LOGIN,
  password: process.env.CMDB_PASSWD,
  database: process.env.CMDB_DBNAME
  ssl: {
    rejectUnauthorized: false 
  }
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CmDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cm';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cm', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
