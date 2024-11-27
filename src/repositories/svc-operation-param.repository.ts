import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {SvcOperationParam, SvcOperationParamRelations} from '../models';

export class SvcOperationParamRepository extends DefaultCrudRepository<
  SvcOperationParam,
  typeof SvcOperationParam.prototype.svcOperationParamId,
  SvcOperationParamRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(SvcOperationParam, dataSource);
  }
}
