import { ScorecardModule } from './scorecard.module';

describe('ScorecardModule', () => {
  let selfServiceModule: ScorecardModule;

  beforeEach(() => {
    selfServiceModule = new ScorecardModule();
  });

  it('should create an instance', () => {
    expect(selfServiceModule).toBeTruthy();
  });
});
