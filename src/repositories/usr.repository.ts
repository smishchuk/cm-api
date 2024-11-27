import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Usr, UsrRelations} from '../models';

export class UsrRepository extends DefaultCrudRepository<
  Usr,
  typeof Usr.prototype.usrId,
  UsrRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Usr, dataSource);
  }
}
