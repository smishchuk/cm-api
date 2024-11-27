import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {InstanceOperation} from '../models';
import {InstanceOperationRepository} from '../repositories';

export class InstanceOperationController {
  constructor(
    @repository(InstanceOperationRepository)
    public instanceOperationRepository : InstanceOperationRepository,
  ) {}

  @post('/instance-operations')
  @response(200, {
    description: 'InstanceOperation model instance',
    content: {'application/json': {schema: getModelSchemaRef(InstanceOperation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperation, {
            title: 'NewInstanceOperation',
            exclude: ['instance_operation_uid'],
          }),
        },
      },
    })
    instanceOperation: Omit<InstanceOperation, 'instance_operation_uid'>,
  ): Promise<InstanceOperation> {
    return this.instanceOperationRepository.create(instanceOperation);
  }

  @get('/instance-operations/count')
  @response(200, {
    description: 'InstanceOperation model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InstanceOperation) where?: Where<InstanceOperation>,
  ): Promise<Count> {
    return this.instanceOperationRepository.count(where);
  }

  @get('/instance-operations')
  @response(200, {
    description: 'Array of InstanceOperation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InstanceOperation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InstanceOperation) filter?: Filter<InstanceOperation>,
  ): Promise<InstanceOperation[]> {
    return this.instanceOperationRepository.find(filter);
  }

  @patch('/instance-operations')
  @response(200, {
    description: 'InstanceOperation PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperation, {partial: true}),
        },
      },
    })
    instanceOperation: InstanceOperation,
    @param.where(InstanceOperation) where?: Where<InstanceOperation>,
  ): Promise<Count> {
    return this.instanceOperationRepository.updateAll(instanceOperation, where);
  }

  @get('/instance-operations/{id}')
  @response(200, {
    description: 'InstanceOperation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InstanceOperation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InstanceOperation, {exclude: 'where'}) filter?: FilterExcludingWhere<InstanceOperation>
  ): Promise<InstanceOperation> {
    return this.instanceOperationRepository.findById(id, filter);
  }

  @patch('/instance-operations/{id}')
  @response(204, {
    description: 'InstanceOperation PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperation, {partial: true}),
        },
      },
    })
    instanceOperation: InstanceOperation,
  ): Promise<void> {
    await this.instanceOperationRepository.updateById(id, instanceOperation);
  }

  @put('/instance-operations/{id}')
  @response(204, {
    description: 'InstanceOperation PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() instanceOperation: InstanceOperation,
  ): Promise<void> {
    await this.instanceOperationRepository.replaceById(id, instanceOperation);
  }

  @del('/instance-operations/{id}')
  @response(204, {
    description: 'InstanceOperation DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.instanceOperationRepository.deleteById(id);
  }
}
