import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {ServiceInstanceV02, ServiceInstanceV02Relations} from '../models';

export class ServiceInstanceV02Repository extends DefaultCrudRepository<
  ServiceInstanceV02,
  typeof ServiceInstanceV02.prototype.serviceInstanceUid,
  ServiceInstanceV02Relations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(ServiceInstanceV02, dataSource);
  }
}
