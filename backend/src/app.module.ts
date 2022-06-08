import { Module } from '@nestjs/common';
import { EmbedController } from './embed/embed.controller';
import { EmbedService } from './embed/embed.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [EmbedController],
  providers: [EmbedService],
})
export class AppModule {}
