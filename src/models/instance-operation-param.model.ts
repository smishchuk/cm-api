import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'cmdb', table: 'instance_operation_param'}
  }
})
export class InstanceOperationParam extends Entity {
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: false},    
    id: 1,
    postgresql: {columnName: 'instance_operation_param_uid', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: true},
  })
  instanceOperationParamUid: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},    
    postgresql: {columnName: 'instance_operation_uid', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  instanceOperationUid: string;

/*   @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,    
    postgresql: {columnName: 'svc_operation_param_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  svcOperationParamId: number; */
  
  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,    
    postgresql: {columnName: 'param', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  param?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,    
    postgresql: {columnName: 'param_value', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  paramValue?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: false},    
    postgresql: {columnName: 'dt_created', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: true},
  })
  dtCreated: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,    
    postgresql: {columnName: 'creator_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  creatorId?: number;
/*
  @property({
    type: 'date',
    jsonSchema: {nullable: false},    
    postgresql: {columnName: 'dt_updated', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: true},
  })
  dtUpdated: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,    
    postgresql: {columnName: 'updater_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  updaterId?: number;
*/
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstanceOperationParam>) {
    super(data);
  }
}

export interface InstanceOperationParamRelations {
  // describe navigational properties here
}

export type InstanceOperationParamWithRelations = InstanceOperationParam & InstanceOperationParamRelations;
