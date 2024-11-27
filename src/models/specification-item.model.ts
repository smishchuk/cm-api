import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'cmdb', table: 'specification_item'}
  }
})
export class SpecificationItem extends Entity {
  @property({
    type: 'number',
    required: false,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 1,
    postgresql: {columnName: 'specification_item_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: true},
  })
  specificationItemId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    postgresql: {columnName: 'specification_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  specificationId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    postgresql: {columnName: 'svc_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  svcId: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 1023,
    
    postgresql: {columnName: 'specification_item', dataType: 'character varying', dataLength: 1023, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  specificationItem: string;

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

  constructor(data?: Partial<SpecificationItem>) {
    super(data);
  }
}

export interface SpecificationItemRelations {
  // describe navigational properties here
}

export type SpecificationItemWithRelations = SpecificationItem & SpecificationItemRelations;
