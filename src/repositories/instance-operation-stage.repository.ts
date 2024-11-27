import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {InstanceOperationStage, InstanceOperationStageRelations} from '../models';

export class InstanceOperationStageRepository extends DefaultCrudRepository<
  InstanceOperationStage,
  typeof InstanceOperationStage.prototype.instanceOperationStageUid,
  InstanceOperationStageRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(InstanceOperationStage, dataSource);
  }
}
