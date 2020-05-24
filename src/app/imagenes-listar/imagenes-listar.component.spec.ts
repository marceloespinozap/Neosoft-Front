import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesListarComponent } from './imagenes-listar.component';

describe('ImagenesListarComponent', () => {
  let component: ImagenesListarComponent;
  let fixture: ComponentFixture<ImagenesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
