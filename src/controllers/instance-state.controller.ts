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
import {InstanceState} from '../models';
import {InstanceStateRepository} from '../repositories';

export class InstanceStateController {
  constructor(
    @repository(InstanceStateRepository)
    public instanceStateRepository : InstanceStateRepository,
  ) {}

  @post('/instance-states')
  @response(200, {
    description: 'InstanceState model instance',
    content: {'application/json': {schema: getModelSchemaRef(InstanceState)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceState, {
            title: 'NewInstanceState',
            exclude: ['instance_state'],
          }),
        },
      },
    })
    instanceState: Omit<InstanceState, 'instance_state'>,
  ): Promise<InstanceState> {
    return this.instanceStateRepository.create(instanceState);
  }

  @get('/instance-states/count')
  @response(200, {
    description: 'InstanceState model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InstanceState) where?: Where<InstanceState>,
  ): Promise<Count> {
    return this.instanceStateRepository.count(where);
  }

  @get('/instance-states')
  @response(200, {
    description: 'Array of InstanceState model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InstanceState, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InstanceState) filter?: Filter<InstanceState>,
  ): Promise<InstanceState[]> {
    return this.instanceStateRepository.find(filter);
  }

  @patch('/instance-states')
  @response(200, {
    description: 'InstanceState PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceState, {partial: true}),
        },
      },
    })
    instanceState: InstanceState,
    @param.where(InstanceState) where?: Where<InstanceState>,
  ): Promise<Count> {
    return this.instanceStateRepository.updateAll(instanceState, where);
  }

  @get('/instance-states/{id}')
  @response(200, {
    description: 'InstanceState model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InstanceState, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InstanceState, {exclude: 'where'}) filter?: FilterExcludingWhere<InstanceState>
  ): Promise<InstanceState> {
    return this.instanceStateRepository.findById(id, filter);
  }

  @patch('/instance-states/{id}')
  @response(204, {
    description: 'InstanceState PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceState, {partial: true}),
        },
      },
    })
    instanceState: InstanceState,
  ): Promise<void> {
    await this.instanceStateRepository.updateById(id, instanceState);
  }

  @put('/instance-states/{id}')
  @response(204, {
    description: 'InstanceState PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() instanceState: InstanceState,
  ): Promise<void> {
    await this.instanceStateRepository.replaceById(id, instanceState);
  }

  @del('/instance-states/{id}')
  @response(204, {
    description: 'InstanceState DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.instanceStateRepository.deleteById(id);
  }
}
