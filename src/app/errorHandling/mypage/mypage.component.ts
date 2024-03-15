import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent {
  error:Error|null=null
  genError(){
   let err:Observable<never>=throwError("Its an error");
   err.subscribe({
    error:(err)=>{
      this.error=err
    }
   })

  }
}
