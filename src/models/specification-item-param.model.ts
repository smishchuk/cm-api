import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'cmdb', table: 'specification_item_param'}
  }
})
export class SpecificationItemParam extends Entity {
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 1,
    postgresql: {columnName: 'specification_item_param_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: true},
  })
  specificationItemParamId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    postgresql: {columnName: 'specification_item_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  specificationItemId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    postgresql: {columnName: 'service_param_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  serviceParamId: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 15,
    scale: 4,
    
    postgresql: {columnName: 'quantity', dataType: 'numeric', dataLength: null, dataPrecision: 15, dataScale: 4, nullable: 'YES', generated: undefined},
  })
  quantity?: number;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    precision: 15,
    scale: 4,
    
    postgresql: {columnName: 'price', dataType: 'numeric', dataLength: null, dataPrecision: 15, dataScale: 4, nullable: 'YES', generated: undefined},
  })
  price?: number;

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
    
    postgresql: {columnName: 'updater_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  updaterId?: number;

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
    
    postgresql: {columnName: 'dt_updated', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dtUpdated: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SpecificationItemParam>) {
    super(data);
  }
}

export interface SpecificationItemParamRelations {
  // describe navigational properties here
}

export type SpecificationItemParamWithRelations = SpecificationItemParam & SpecificationItemParamRelations;
