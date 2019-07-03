import { ScorecardModule } from './scorecard.module';

describe('ScorecardModule', () => {
  let scorecardModule: ScorecardModule;

  beforeEach(() => {
    scorecardModule = new ScorecardModule();
  });

  it('should create an instance', () => {
    expect(scorecardModule).toBeTruthy();
  });
});
