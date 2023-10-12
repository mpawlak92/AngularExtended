import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-rxjs';

  constructor(){
    this.onComplete().then(this.setTitle)
  }

  private setTitle =() =>{
    this.title = 'Nauka Angulara'
  }

  private changeTitle (callback:Function){
    setTimeout(()=>{
      callback()
    },2000)
  }

  private onComplete (){
    return new Promise<void>(resolve =>{
      setTimeout(()=>{
        resolve()
      },2000)})
    }
  
}
