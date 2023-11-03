import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonModule } from './pokemon.module';

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PokemonModule],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
