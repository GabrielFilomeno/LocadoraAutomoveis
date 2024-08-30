import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGitHubComponent } from './link-git-hub.component';

describe('LinkGitHubComponent', () => {
  let component: LinkGitHubComponent;
  let fixture: ComponentFixture<LinkGitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkGitHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
