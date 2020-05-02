import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomConnectionComponent } from './room-connection.component';

describe('RoomConnectionComponent', () => {
  let component: RoomConnectionComponent;
  let fixture: ComponentFixture<RoomConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
