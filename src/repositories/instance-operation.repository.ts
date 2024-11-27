import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {InstanceOperation, InstanceOperationRelations} from '../models';

export class InstanceOperationRepository extends DefaultCrudRepository<
  InstanceOperation,
  typeof InstanceOperation.prototype.instanceOperationUid,
  InstanceOperationRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(InstanceOperation, dataSource);
  }
}
