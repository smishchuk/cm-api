import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {ServiceInstance, ServiceInstanceRelations} from '../models';

export class ServiceInstanceRepository extends DefaultCrudRepository<
  ServiceInstance,
  typeof ServiceInstance.prototype.serviceInstanceUid,
  ServiceInstanceRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(ServiceInstance, dataSource);
  }
}
