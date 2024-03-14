import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('project', { static: false }) project!: ElementRef;
 @ContentChild('ulp')pr!:ElementRef;
  ngAfterContentInit() {
    // You can now access projected content after content initialization
    const liList=this.pr.nativeElement.querySelectorAll('li');
    liList.forEach((element:any) => {
      console.log(element.innerHTML);
      
    });
    if (this.project) {
      console.log('Projected Content:', this.project.nativeElement.innerHTML);
    }
  }
}
