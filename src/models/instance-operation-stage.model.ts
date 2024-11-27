import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'cmdb', table: 'instance_operation_stage'}
  }
})
export class InstanceOperationStage extends Entity {
  @property({
    type: 'string',
    required: false,
    jsonSchema: {nullable: false},
    
    id: 1,
    postgresql: {columnName: 'instance_operation_stage_uid', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: true},
  })
  instanceOperationStageUid: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    
    postgresql: {columnName: 'instance_operation_uid', dataType: 'uuid', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  instanceOperationUid: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 31,    
    postgresql: {columnName: 'stage', dataType: 'character varying', dataLength: 31, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  stage: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: false},    
    postgresql: {columnName: 'dt_start', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: true},
  })
  dtStart?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},    
    postgresql: {columnName: 'dt_finish', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  dtFinish?: string;

  @property({
    type: 'boolean',
    jsonSchema: {nullable: false},    
    postgresql: {columnName: 'is_successful', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  isSuccessful: boolean;
  
  @property({
    type: 'object',
    jsonSchema: {nullable: true},
    description: "any json data for trace and debug",
    postgresql: {columnName: 'stage_data', dataType: 'jsonb', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  stageData?: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstanceOperationStage>) {
    super(data);
  }
}

export interface InstanceOperationStageRelations {
  // describe navigational properties here
}

export type InstanceOperationStageWithRelations = InstanceOperationStage & InstanceOperationStageRelations;
