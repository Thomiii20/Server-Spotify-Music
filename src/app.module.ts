import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SongsModule } from './songs/songs.module';

@Module({
  imports: [UsersModule,SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
