import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, postgresql: {schema: 'cmdb', table: 'usr'}}})
export class Usr extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 1,
    postgresql: {columnName: 'usr_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  usrId: number;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    
    postgresql: {columnName: 'firstname', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  firstname?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    
    postgresql: {columnName: 'middlename', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  middlename?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    
    postgresql: {columnName: 'lastname', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    
    postgresql: {columnName: 'login', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  login: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 255,
    
    postgresql: {columnName: 'password', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  password?: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {nullable: false},
    length: 255,
    
    postgresql: {columnName: 'email', dataType: 'character varying', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  email: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    length: 50,
    
    postgresql: {columnName: 'phone_cell', dataType: 'character varying', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  phoneCell?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'descr', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  descr?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'settings', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  settings?: string;

  @property({
    type: 'boolean',
    required: true,
    jsonSchema: {nullable: false},
    
    postgresql: {columnName: 'locked', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  locked: boolean;

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

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'fullname', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  fullname?: string;

  @property({
    type: 'string',
    jsonSchema: {nullable: true},
    
    postgresql: {columnName: 'shortname', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined},
  })
  shortname?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usr>) {
    super(data);
  }
}

export interface UsrRelations {
  // describe navigational properties here
}

export type UsrWithRelations = Usr & UsrRelations;
