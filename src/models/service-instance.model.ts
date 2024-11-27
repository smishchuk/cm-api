import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'cmdb', table: 'service_instance'}}
})
export class ServiceInstance extends Entity {
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: false},
    id: 1,
    postgresql: {columnName: 'service_instance_uid', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: true},
  })
  serviceInstanceUid: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    postgresql: {columnName: 'instance', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  instance?: string;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    postgresql: {columnName: 'service_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  serviceId: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {columnName: 'specification_item_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  specificationItemId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {columnName: 'creator_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  creatorId?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    postgresql: {columnName: 'modifier_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  modifierId?: number;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    postgresql: {columnName: 'dt_created', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dtCreated: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    postgresql: {columnName: 'dt_modified', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dtModified: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 15,
    postgresql: {columnName: 'status', dataType: 'character varying', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  status: string;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    postgresql: {columnName: 'is_deleted', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  isDeleted: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {columnName: 'instance_data', dataType: 'jsonb', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  instanceData?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    postgresql: {columnName: 'descr', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  descr?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ServiceInstance>) {
    super(data);
  }
}

export interface ServiceInstanceRelations {
  // describe navigational properties here
}

export type ServiceInstanceWithRelations = ServiceInstance & ServiceInstanceRelations;
