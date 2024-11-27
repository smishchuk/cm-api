import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'cmdb', table: 'specification'}}
})
export class Specification extends Entity {
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 1,
    postgresql: {columnName: 'specification_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: true},
  })
  specificationId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    postgresql: {columnName: 'contract_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  contractId: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    
    postgresql: {columnName: 'specification', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  specification: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'dt_valid_from', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  dtValidFrom?: string;

  @property({
    type: 'date',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'dt_valid_to', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  dtValidTo?: string;

  @property({
    type: 'boolean',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'is_trial', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  isTrial?: boolean;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'descr', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  descr?: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    
    postgresql: {columnName: 'dt_created', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dtCreated: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    
    postgresql: {columnName: 'creator_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  creatorId?: number;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    
    postgresql: {columnName: 'dt_updated', dataType: 'timestamp with time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dtUpdated: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    
    postgresql: {columnName: 'updater_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  updaterId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Specification>) {
    super(data);
  }
}

export interface SpecificationRelations {
  // describe navigational properties here
}

export type SpecificationWithRelations = Specification & SpecificationRelations;
