import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Contragent, ContragentRelations} from '../models';

export class ContragentRepository extends DefaultCrudRepository<
  Contragent,
  typeof Contragent.prototype.contragentId,
  ContragentRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Contragent, dataSource);
  }
}
