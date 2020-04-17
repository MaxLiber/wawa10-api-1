import { Module } from '@nestjs/common';

import { MulterModule } from '@nestjs/platform-express';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './controllers/api/api.module';
import { AuthModule } from './modules/auth/auth.module';
import { SoapModule } from './modules/soap/soap.module';
import { MailModule } from './modules/mail/mail.module';
import { ContactModule } from './modules/contact/contact.module';
import { NewsModule } from './modules/news/news.module';
import { AdminModule } from './modules/admin/admin.module';
import { ParametreModule } from './modules/parametre/parametre.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    ConfigModule.forRoot(),
    AuthModule,
    ApiModule,
    SoapModule,
    MailModule,
    ContactModule,
    NewsModule,
    AdminModule,
    ParametreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
