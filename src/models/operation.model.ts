import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'cmdb', table: 'operation'}}
})
export class Operation extends Entity {
  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 63,
    
    id: 1,
    postgresql: {columnName: 'operation', dataType: 'character varying', dataLength: 63, dataPrecision: null, dataScale: null, nullable: 'NO', generated: false},
  })
  operation: string;

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

  constructor(data?: Partial<Operation>) {
    super(data);
  }
}

export interface OperationRelations {
  // describe navigational properties here
}

export type OperationWithRelations = Operation & OperationRelations;
