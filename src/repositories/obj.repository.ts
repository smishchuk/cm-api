import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CmDataSource} from '../datasources';
import {Obj, ObjRelations} from '../models';

export class ObjRepository extends DefaultCrudRepository<
  Obj,
  typeof Obj.prototype.obj,
  ObjRelations
> {
  constructor(
    @inject('datasources.cm') dataSource: CmDataSource,
  ) {
    super(Obj, dataSource);
  }
}
