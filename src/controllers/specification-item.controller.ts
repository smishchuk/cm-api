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
import {SpecificationItem} from '../models';
import {SpecificationItemRepository} from '../repositories';

export class SpecificationItemController {
  constructor(
    @repository(SpecificationItemRepository)
    public specificationItemRepository : SpecificationItemRepository,
  ) {}

  @post('/specification-items')
  @response(200, {
    description: 'SpecificationItem model instance',
    content: {'application/json': {schema: getModelSchemaRef(SpecificationItem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SpecificationItem, {
            title: 'NewSpecificationItem',
            exclude: ['specification_item_id'],
          }),
        },
      },
    })
    specificationItem: Omit<SpecificationItem, 'specification_item_id'>,
  ): Promise<SpecificationItem> {
    return this.specificationItemRepository.create(specificationItem);
  }

  @get('/specification-items/count')
  @response(200, {
    description: 'SpecificationItem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SpecificationItem) where?: Where<SpecificationItem>,
  ): Promise<Count> {
    return this.specificationItemRepository.count(where);
  }

  @get('/specification-items')
  @response(200, {
    description: 'Array of SpecificationItem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SpecificationItem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SpecificationItem) filter?: Filter<SpecificationItem>,
  ): Promise<SpecificationItem[]> {
    return this.specificationItemRepository.find(filter);
  }

  @patch('/specification-items')
  @response(200, {
    description: 'SpecificationItem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SpecificationItem, {partial: true}),
        },
      },
    })
    specificationItem: SpecificationItem,
    @param.where(SpecificationItem) where?: Where<SpecificationItem>,
  ): Promise<Count> {
    return this.specificationItemRepository.updateAll(specificationItem, where);
  }

  @get('/specification-items/{id}')
  @response(200, {
    description: 'SpecificationItem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SpecificationItem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SpecificationItem, {exclude: 'where'}) filter?: FilterExcludingWhere<SpecificationItem>
  ): Promise<SpecificationItem> {
    return this.specificationItemRepository.findById(id, filter);
  }

  @patch('/specification-items/{id}')
  @response(204, {
    description: 'SpecificationItem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SpecificationItem, {partial: true}),
        },
      },
    })
    specificationItem: SpecificationItem,
  ): Promise<void> {
    await this.specificationItemRepository.updateById(id, specificationItem);
  }

  @put('/specification-items/{id}')
  @response(204, {
    description: 'SpecificationItem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() specificationItem: SpecificationItem,
  ): Promise<void> {
    await this.specificationItemRepository.replaceById(id, specificationItem);
  }

  @del('/specification-items/{id}')
  @response(204, {
    description: 'SpecificationItem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.specificationItemRepository.deleteById(id);
  }
}
