import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {InstanceOperationParam, InstanceOperationParamRelations} from '../models';

export class InstanceOperationParamRepository extends DefaultCrudRepository<
  InstanceOperationParam,
  typeof InstanceOperationParam.prototype.instanceOperationParamUid,
  InstanceOperationParamRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(InstanceOperationParam, dataSource);
  }
}
