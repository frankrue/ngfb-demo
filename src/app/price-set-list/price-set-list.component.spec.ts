import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSetListComponent } from './price-set-list.component';

describe('PriceSetListComponent', () => {
  let component: PriceSetListComponent;
  let fixture: ComponentFixture<PriceSetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
