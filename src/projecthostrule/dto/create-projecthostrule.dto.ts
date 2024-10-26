import { IsUrl } from 'class-validator';
import { Url } from 'url';

export class CreateProjectHostRuleDto {
  @IsUrl()
  url: Url;
}
