import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {InstanceState, InstanceStateRelations} from '../models';

export class InstanceStateRepository extends DefaultCrudRepository<
  InstanceState,
  typeof InstanceState.prototype.instanceStateUid,
  InstanceStateRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(InstanceState, dataSource);
  }
}
