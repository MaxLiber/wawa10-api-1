import { Connection, Repository } from 'typeorm';
import { AuthUserEntity } from './entities/auth-user.entity';
import { AuthRoleEntity } from './entities/auth-role.entity';
import { AuthDomainEntity } from './entities/auth-domain.entity';
import { AuthGroupEntity } from './entities/auth-group.entity';

export const userProvider = [
  {
    provide: 'AuthUserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(AuthUserEntity),
    inject: ['DbConnectionToken'],
  },
];

export const userRoleProvider = [
  {
    provide: 'AuthRoleRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(AuthRoleEntity),
    inject: ['DbConnectionToken'],
  },
];

export const authDomainProvider = [
  {
    provide: 'AuthDomainRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(AuthDomainEntity),
    inject: ['DbConnectionToken'],
  },
];

export const authGroupProvider = [
  {
    provide: 'AuthGroupRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(AuthGroupEntity),
    inject: ['DbConnectionToken'],
  },
];

