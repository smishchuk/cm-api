import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'cmdb', table: 'role'}}})
export class Role extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 1,
    postgresql: {columnName: 'role_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  roleId: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    
    postgresql: {columnName: 'role', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  role: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'descr', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  descr?: string;

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

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
