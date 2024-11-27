import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Operation, OperationRelations} from '../models';

export class OperationRepository extends DefaultCrudRepository<
  Operation,
  typeof Operation.prototype.operation,
  OperationRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Operation, dataSource);
  }
}
