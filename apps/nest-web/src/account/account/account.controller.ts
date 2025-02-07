import {
  Controller,
  Get,
  Inject,
  Query,
  Param,
  UseInterceptors,
  Logger,
  Body,
  Post,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { UserException } from 'src/common/exception/UserException';
import { queryDto, userDto } from './account.dto';
import { Cache } from 'cache-manager';
import {
  CACHE_MANAGER,
  CacheInterceptor,
  CacheKey,
  CacheTTL,
} from '@nestjs/cache-manager';

@Controller('account')
export class AccountController {
  private readonly logger = new Logger('AccountController');

  @Inject(AccountService)
  private readonly accountService: AccountService;

  @Inject(CACHE_MANAGER)
  private readonly cacheManager: Cache;

  @Get()
  index() {
    return 'index';
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(10)
  @Get('/info')
  async getInfo(@Query() query: queryDto) {
    this.logger.debug('info...');
    this.logger.log('info...');
    this.logger.warn('info...');
    this.logger.error('error...');
    return {
      account: await this.accountService.getInfo(
        {
          id: query.id,
          email: 'asd@qq.com',
        },
        {
          p1: 'p1v',
          p2: 2,
        },
      ),
      time: new Date().toISOString(),
    };
  }

  @Get('/error')
  errorDemo() {
    throw new UserException(40010, '异常');
  }

  @Get('/all')
  async all() {
    return {};
  }

  @Get('/error2')
  error2() {
    const a = null as any;
    a.forEach((element) => {
      console.log(element + 1);
    });
    return 'asdf';
  }
}
