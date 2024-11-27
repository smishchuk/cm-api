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
import {ServiceInstanceV03} from '../models';
import {ServiceInstanceV03Repository} from '../repositories';

export class ServiceInstanceV03Controller {
  constructor(
    @repository(ServiceInstanceV03Repository)
    public serviceInstanceV03Repository : ServiceInstanceV03Repository,
  ) {}

  @post('/service-instance-v03s')
  @response(200, {
    description: 'ServiceInstanceV03 model instance',
    content: {'application/json': {schema: getModelSchemaRef(ServiceInstanceV03)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ServiceInstanceV03, {
            title: 'NewServiceInstanceV03',
            
          }),
        },
      },
    })
    serviceInstanceV03: ServiceInstanceV03,
  ): Promise<ServiceInstanceV03> {
    return this.serviceInstanceV03Repository.create(serviceInstanceV03);
  }

  @get('/service-instance-v03s/count')
  @response(200, {
    description: 'ServiceInstanceV03 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ServiceInstanceV03) where?: Where<ServiceInstanceV03>,
  ): Promise<Count> {
    return this.serviceInstanceV03Repository.count(where);
  }

  @get('/service-instance-v03s')
  @response(200, {
    description: 'Array of ServiceInstanceV03 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ServiceInstanceV03, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ServiceInstanceV03) filter?: Filter<ServiceInstanceV03>,
  ): Promise<ServiceInstanceV03[]> {
    return this.serviceInstanceV03Repository.find(filter);
  }

  @patch('/service-instance-v03s')
  @response(200, {
    description: 'ServiceInstanceV03 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ServiceInstanceV03, {partial: true}),
        },
      },
    })
    serviceInstanceV03: ServiceInstanceV03,
    @param.where(ServiceInstanceV03) where?: Where<ServiceInstanceV03>,
  ): Promise<Count> {
    return this.serviceInstanceV03Repository.updateAll(serviceInstanceV03, where);
  }

  @get('/service-instance-v03s/{id}')
  @response(200, {
    description: 'ServiceInstanceV03 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ServiceInstanceV03, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ServiceInstanceV03, {exclude: 'where'}) filter?: FilterExcludingWhere<ServiceInstanceV03>
  ): Promise<ServiceInstanceV03> {
    return this.serviceInstanceV03Repository.findById(id, filter);
  }

  @patch('/service-instance-v03s/{id}')
  @response(204, {
    description: 'ServiceInstanceV03 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ServiceInstanceV03, {partial: true}),
        },
      },
    })
    serviceInstanceV03: ServiceInstanceV03,
  ): Promise<void> {
    await this.serviceInstanceV03Repository.updateById(id, serviceInstanceV03);
  }

  @put('/service-instance-v03s/{id}')
  @response(204, {
    description: 'ServiceInstanceV03 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() serviceInstanceV03: ServiceInstanceV03,
  ): Promise<void> {
    await this.serviceInstanceV03Repository.replaceById(id, serviceInstanceV03);
  }

  @del('/service-instance-v03s/{id}')
  @response(204, {
    description: 'ServiceInstanceV03 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.serviceInstanceV03Repository.deleteById(id);
  }
}
