import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliqueComponent } from './clique.component';

describe('CliqueComponent', () => {
  let component: CliqueComponent;
  let fixture: ComponentFixture<CliqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
