import * as common from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';

@common.Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @common.Post('/post')
  create(@common.Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @common.Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @common.Get(':id')
  findOne(@common.Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  // @common.Patch(':id')
  // update(@common.Param('id') id: string, @common.Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }

  @common.Delete(':id')
  remove(@common.Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
