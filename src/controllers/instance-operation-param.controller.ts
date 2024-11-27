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
import {InstanceOperationParam} from '../models';
import {InstanceOperationParamRepository} from '../repositories';

export class InstanceOperationParamController {
  constructor(
    @repository(InstanceOperationParamRepository)
    public instanceOperationParamRepository : InstanceOperationParamRepository,
  ) {}

  @post('/instance-operation-params')
  @response(200, {
    description: 'InstanceOperationParam model instance',
    content: {'application/json': {schema: getModelSchemaRef(InstanceOperationParam)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperationParam, {
            title: 'NewInstanceOperationParam',
            exclude: ['instance_operation_param_uid'],
          }),
        },
      },
    })
    instanceOperationParam: Omit<InstanceOperationParam, 'instance_operation_param_uid'>,
  ): Promise<InstanceOperationParam> {
    return this.instanceOperationParamRepository.create(instanceOperationParam);
  }

  @get('/instance-operation-params/count')
  @response(200, {
    description: 'InstanceOperationParam model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InstanceOperationParam) where?: Where<InstanceOperationParam>,
  ): Promise<Count> {
    return this.instanceOperationParamRepository.count(where);
  }

  @get('/instance-operation-params')
  @response(200, {
    description: 'Array of InstanceOperationParam model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InstanceOperationParam, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InstanceOperationParam) filter?: Filter<InstanceOperationParam>,
  ): Promise<InstanceOperationParam[]> {
    return this.instanceOperationParamRepository.find(filter);
  }

  @patch('/instance-operation-params')
  @response(200, {
    description: 'InstanceOperationParam PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperationParam, {partial: true}),
        },
      },
    })
    instanceOperationParam: InstanceOperationParam,
    @param.where(InstanceOperationParam) where?: Where<InstanceOperationParam>,
  ): Promise<Count> {
    return this.instanceOperationParamRepository.updateAll(instanceOperationParam, where);
  }

  @get('/instance-operation-params/{id}')
  @response(200, {
    description: 'InstanceOperationParam model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InstanceOperationParam, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InstanceOperationParam, {exclude: 'where'}) filter?: FilterExcludingWhere<InstanceOperationParam>
  ): Promise<InstanceOperationParam> {
    return this.instanceOperationParamRepository.findById(id, filter);
  }

  @patch('/instance-operation-params/{id}')
  @response(204, {
    description: 'InstanceOperationParam PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperationParam, {partial: true}),
        },
      },
    })
    instanceOperationParam: InstanceOperationParam,
  ): Promise<void> {
    await this.instanceOperationParamRepository.updateById(id, instanceOperationParam);
  }

  @put('/instance-operation-params/{id}')
  @response(204, {
    description: 'InstanceOperationParam PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() instanceOperationParam: InstanceOperationParam,
  ): Promise<void> {
    await this.instanceOperationParamRepository.replaceById(id, instanceOperationParam);
  }

  @del('/instance-operation-params/{id}')
  @response(204, {
    description: 'InstanceOperationParam DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.instanceOperationParamRepository.deleteById(id);
  }
}
