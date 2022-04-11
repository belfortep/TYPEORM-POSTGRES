import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    username: process.env.BB_DD_USERNAME,
    password: process.env.PASSWORD,
    port: 5432,
    database: process.env.DATABASE,
    entities: [User],
    logging: true,
    synchronize: true
})