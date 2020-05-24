import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenShowComponent } from './imagen-show.component';

describe('ImagenShowComponent', () => {
  let component: ImagenShowComponent;
  let fixture: ComponentFixture<ImagenShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
