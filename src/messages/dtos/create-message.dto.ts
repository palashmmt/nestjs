import { IsNotEmpty, IsString } from 'class-validator';
export class CreateMessageDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  content: string;
}
