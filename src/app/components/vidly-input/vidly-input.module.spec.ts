import { VidlyInputModule } from './vidly-input.module';

describe('VidlyInputModule', () => {
  let vidlyInputModule: VidlyInputModule;

  beforeEach(() => {
    vidlyInputModule = new VidlyInputModule();
  });

  it('should create an instance', () => {
    expect(vidlyInputModule).toBeTruthy();
  });
});
