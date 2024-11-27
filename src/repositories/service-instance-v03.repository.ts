import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {ServiceInstanceV03, ServiceInstanceV03Relations} from '../models';

export class ServiceInstanceV03Repository extends DefaultCrudRepository<
  ServiceInstanceV03,
  typeof ServiceInstanceV03.prototype.serviceInstanceVersionUid,
  ServiceInstanceV03Relations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(ServiceInstanceV03, dataSource);
  }
}
