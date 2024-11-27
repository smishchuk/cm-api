import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Contract, ContractRelations} from '../models';

export class ContractRepository extends DefaultCrudRepository<
  Contract,
  typeof Contract.prototype.contractId,
  ContractRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Contract, dataSource);
  }
}
