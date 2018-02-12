import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloneModalComponent } from './clone-modal.component';

describe('CloneModalComponent', () => {
  let component: CloneModalComponent;
  let fixture: ComponentFixture<CloneModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloneModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
