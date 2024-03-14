import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  
  dataList:any[]=[
    {name:'m',age:29},
    {name:'v',age:28},
    {name:'shi',age:28},
    {name:'sa',age:26},
    {name:'sha',age:23}
  ]
  
  ngOnInit(){
  }
  getDatas(name:any):string{
    console.log("function call");
     if(name==='m'){
      return 'mujeeb'
     }
     if(name==='v'){
      return 'vishnu'
     }
     if(name==='shi'){
      return 'shibu'
     }
     if(name==='sa'){
      return 'sajith'
     }
     if(name==='sha'){
      return 'shahabas'
     }

     else{
      return 'no name'
     }
  }
}
