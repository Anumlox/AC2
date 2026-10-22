import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2 } from './post2';

describe('Post2', () => {
  let component: Post2;
  let fixture: ComponentFixture<Post2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post2],
    }).compileComponents();

    fixture = TestBed.createComponent(Post2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
