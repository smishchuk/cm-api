import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Svc, SvcRelations} from '../models';

export class SvcRepository extends DefaultCrudRepository<
  Svc,
  typeof Svc.prototype.svcId,
  SvcRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Svc, dataSource);
  }
}
