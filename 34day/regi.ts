import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterActivityComponent } from './register-activity.component';

describe('RegisterActivityComponent', () => {
  let component: RegisterActivityComponent;
  let fixture: ComponentFixture<RegisterActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});