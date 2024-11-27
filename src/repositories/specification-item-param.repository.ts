import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {SpecificationItemParam, SpecificationItemParamRelations} from '../models';

export class SpecificationItemParamRepository extends DefaultCrudRepository<
  SpecificationItemParam,
  typeof SpecificationItemParam.prototype.specificationItemParamId,
  SpecificationItemParamRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(SpecificationItemParam, dataSource);
  }
}
