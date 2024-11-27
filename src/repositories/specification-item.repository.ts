import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {SpecificationItem, SpecificationItemRelations} from '../models';

export class SpecificationItemRepository extends DefaultCrudRepository<
  SpecificationItem,
  typeof SpecificationItem.prototype.specificationItemId,
  SpecificationItemRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(SpecificationItem, dataSource);
  }
}
