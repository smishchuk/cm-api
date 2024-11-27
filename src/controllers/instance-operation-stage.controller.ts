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
import {InstanceOperationStage} from '../models';
import {InstanceOperationStageRepository} from '../repositories';

export class InstanceOperationStageController {
  constructor(
    @repository(InstanceOperationStageRepository)
    public instanceOperationStageRepository : InstanceOperationStageRepository,
  ) {}

  @post('/instance-operation-stages')
  @response(200, {
    description: 'InstanceOperationStage model instance',
    content: {'application/json': {schema: getModelSchemaRef(InstanceOperationStage)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperationStage, {
            title: 'NewInstanceOperationStage',
            exclude: ['instance_operation_stage_uid'],
          }),
        },
      },
    })
    instanceOperationStage: Omit<InstanceOperationStage, 'instance_operation_stage_uid'>,
  ): Promise<InstanceOperationStage> {
    return this.instanceOperationStageRepository.create(instanceOperationStage);
  }

  @get('/instance-operation-stages/count')
  @response(200, {
    description: 'InstanceOperationStage model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InstanceOperationStage) where?: Where<InstanceOperationStage>,
  ): Promise<Count> {
    return this.instanceOperationStageRepository.count(where);
  }

  @get('/instance-operation-stages')
  @response(200, {
    description: 'Array of InstanceOperationStage model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InstanceOperationStage, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InstanceOperationStage) filter?: Filter<InstanceOperationStage>,
  ): Promise<InstanceOperationStage[]> {
    return this.instanceOperationStageRepository.find(filter);
  }

  @patch('/instance-operation-stages')
  @response(200, {
    description: 'InstanceOperationStage PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperationStage, {partial: true}),
        },
      },
    })
    instanceOperationStage: InstanceOperationStage,
    @param.where(InstanceOperationStage) where?: Where<InstanceOperationStage>,
  ): Promise<Count> {
    return this.instanceOperationStageRepository.updateAll(instanceOperationStage, where);
  }

  @get('/instance-operation-stages/{id}')
  @response(200, {
    description: 'InstanceOperationStage model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InstanceOperationStage, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InstanceOperationStage, {exclude: 'where'}) filter?: FilterExcludingWhere<InstanceOperationStage>
  ): Promise<InstanceOperationStage> {
    return this.instanceOperationStageRepository.findById(id, filter);
  }

  @patch('/instance-operation-stages/{id}')
  @response(204, {
    description: 'InstanceOperationStage PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InstanceOperationStage, {partial: true}),
        },
      },
    })
    instanceOperationStage: InstanceOperationStage,
  ): Promise<void> {
    await this.instanceOperationStageRepository.updateById(id, instanceOperationStage);
  }

  @put('/instance-operation-stages/{id}')
  @response(204, {
    description: 'InstanceOperationStage PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() instanceOperationStage: InstanceOperationStage,
  ): Promise<void> {
    await this.instanceOperationStageRepository.replaceById(id, instanceOperationStage);
  }

  @del('/instance-operation-stages/{id}')
  @response(204, {
    description: 'InstanceOperationStage DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.instanceOperationStageRepository.deleteById(id);
  }
}
