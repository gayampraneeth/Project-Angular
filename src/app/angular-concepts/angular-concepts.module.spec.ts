import { AngularConceptsModule } from './angular-concepts.module';

describe('AngularConceptsModule', () => {
  let angularConceptsModule: AngularConceptsModule;

  beforeEach(() => {
    angularConceptsModule = new AngularConceptsModule();
  });

  it('should create an instance', () => {
    expect(angularConceptsModule).toBeTruthy();
  });
});
