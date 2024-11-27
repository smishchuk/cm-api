import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {UsrRole, UsrRoleRelations} from '../models';

export class UsrRoleRepository extends DefaultCrudRepository<
  UsrRole,
  typeof UsrRole.prototype.roleId,
  UsrRoleRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(UsrRole, dataSource);
  }
}
