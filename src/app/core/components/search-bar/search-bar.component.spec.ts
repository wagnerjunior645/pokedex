import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value on click search bar', () => {
    const searchValue = 'pokedex';
    const id = 'clkSearch';
    component.searchControl.setValue(searchValue);
    fixture.detectChanges();
    const searchButton = fixture.debugElement.query(By.css(`#${id}`));
    component.searchValue.subscribe((value) => {
      expect(value).toBe(searchValue);
    });
    searchButton.triggerEventHandler('click', null);
  });

  it('should emit value on keyup enter search bar', () => {
    const searchValue = 'test';
    component.searchControl.setValue(searchValue);
    fixture.detectChanges();
    const searchButton = fixture.debugElement.query(By.css(`input`));
    component.searchValue.subscribe((value: string) => {
      expect(value).toBe(searchValue);
    });
    searchButton.triggerEventHandler('keyup.enter', null);
  });
});
