import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';
export class updateMovieDTO extends PartialType(CreateMovieDTO) {}

/* PartialType 이 해주는 정보
  @IsString()
  readonly title?: string;

  @IsNumber()
  readonly year?: number;

  @IsString({ each: true })
  readonly genres?: string[];
*/
