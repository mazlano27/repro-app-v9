import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedRouteComponent } from './lazy-loaded-route.component';

describe('LazyLoadedRouteComponent', () => {
  let component: LazyLoadedRouteComponent;
  let fixture: ComponentFixture<LazyLoadedRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
