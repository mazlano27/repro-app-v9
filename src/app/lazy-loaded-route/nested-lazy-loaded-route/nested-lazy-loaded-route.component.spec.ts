import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedLazyLoadedRouteComponent } from './nested-lazy-loaded-route.component';

describe('NestedLazyLoadedRouteComponent', () => {
  let component: NestedLazyLoadedRouteComponent;
  let fixture: ComponentFixture<NestedLazyLoadedRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedLazyLoadedRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedLazyLoadedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
