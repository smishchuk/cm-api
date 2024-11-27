import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {SvcOperation, SvcOperationRelations} from '../models';

export class SvcOperationRepository extends DefaultCrudRepository<
  SvcOperation,
  typeof SvcOperation.prototype.svcOperationId,
  SvcOperationRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(SvcOperation, dataSource);
  }
}
