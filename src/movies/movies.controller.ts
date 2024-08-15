import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import Movie from './entities/movie.entity';

// /movies
@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[]{
    return this.moviesService.getAll();
  }
  
  @Get('search')
  search(@Query('year') searchingYear: string){
    return `We are searching for a movie with a title: ${searchingYear}`;
  }

  @Get(":id")
  getOne(@Param("id") movieId: string): Movie{
    return this.moviesService.getOne(movieId);
  }
  
  @Post()
  create(@Body() movieData){
    return this.moviesService.create(movieData);
  }

  @Delete(":id")
  remove(@Param('id') movieId: string){
    return this.moviesService.deleteOne(movieId);
  }
  
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData){
    return this.moviesService.update(movieId, updateData);
  }


}
