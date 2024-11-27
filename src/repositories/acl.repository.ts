import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Acl, AclRelations} from '../models';

export class AclRepository extends DefaultCrudRepository<
  Acl,
  typeof Acl.prototype.obj,
  AclRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Acl, dataSource);
  }
}
