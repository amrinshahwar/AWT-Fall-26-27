import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { AppController } from "@/src/app.controller";
import { AppService } from "@/src/app.service";
import global_config from "@/config/global_config";
import { BullModule } from "@nestjs/bull";
import { UserModule } from "./modules/users/users.module";
import { ProfileModule } from "./modules/profiles/profiles.module";
import { ResearchGroupsModule } from "./modules/ResearchGroups/researchgroups.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    BullModule.forRoot({
      url: process.env.REDIS_URL,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [global_config],
    }),
    UserModule,
    ProfileModule,
    ResearchGroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }