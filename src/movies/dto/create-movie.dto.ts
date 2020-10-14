import { isString } from 'util';

import { IsString, IsNumber } from 'class-validator';
export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: false })
  readonly genres: string[];
}
