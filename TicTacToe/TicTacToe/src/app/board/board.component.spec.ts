import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
import { SquareComponent } from '../square/square.component';
import { By } from '@angular/platform-browser';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, SquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the right text on the `new game button`', () => {
    const button = fixture.debugElement.query(By.css('#btnNewGame'));
    expect(button.nativeElement.textContent.trim()).toBe('Start new Game!!');
  });
});
