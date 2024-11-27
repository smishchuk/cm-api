import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Instance, InstanceRelations} from '../models';

export class InstanceRepository extends DefaultCrudRepository<
  Instance,
  typeof Instance.prototype.instanceUid,
  InstanceRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Instance, dataSource);
  }
}
