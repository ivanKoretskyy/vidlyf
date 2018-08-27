import { VidlyCheckboxModule } from './vidly-checkbox.module';

describe('VidlyCheckboxModule', () => {
  let vidlyCheckboxModule: VidlyCheckboxModule;

  beforeEach(() => {
    vidlyCheckboxModule = new VidlyCheckboxModule();
  });

  it('should create an instance', () => {
    expect(vidlyCheckboxModule).toBeTruthy();
  });
});
