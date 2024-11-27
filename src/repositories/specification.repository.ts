import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Specification, SpecificationRelations} from '../models';

export class SpecificationRepository extends DefaultCrudRepository<
  Specification,
  typeof Specification.prototype.specificationId,
  SpecificationRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Specification, dataSource);
  }
}
