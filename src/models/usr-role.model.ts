import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'cmdb', table: 'usr_role'}}
})
export class UsrRole extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 2,
    postgresql: {columnName: 'role_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: false},
  })
  roleId: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    
    id: 1,
    postgresql: {columnName: 'usr_id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  usrId: number;

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
    
    postgresql: {columnName: 'dt_created', dataType: 'timestamp without time zone', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dtCreated: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UsrRole>) {
    super(data);
  }
}

export interface UsrRoleRelations {
  // describe navigational properties here
}

export type UsrRoleWithRelations = UsrRole & UsrRoleRelations;
