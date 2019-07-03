import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationdupComponent } from './navigationdup.component';

describe('NavigationdupComponent', () => {
  let component: NavigationdupComponent;
  let fixture: ComponentFixture<NavigationdupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationdupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationdupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
