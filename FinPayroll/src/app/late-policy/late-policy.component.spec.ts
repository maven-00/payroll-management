import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatePolicyComponent } from './late-policy.component';

describe('LatePolicyComponent', () => {
  let component: LatePolicyComponent;
  let fixture: ComponentFixture<LatePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatePolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
