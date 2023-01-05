import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          user: 'postgres',
          password: 'newpassword',
          database: 'brands',
        },
        pool: { min: 0, max: 7 },
      },
    }),
  ],
})
export class KnexModules {}
