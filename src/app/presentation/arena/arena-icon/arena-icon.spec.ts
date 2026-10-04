import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArenaIcon } from './arena-icon';

describe('ArenaIcon', () => {
  let component: ArenaIcon;
  let fixture: ComponentFixture<ArenaIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenaIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(ArenaIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
