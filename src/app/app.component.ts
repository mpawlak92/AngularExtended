import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-rxjs';
  title$ = new Observable(observer => {setInterval(()=>{
    observer.next()
  },2000)})
  

  constructor(){
    // this.onComplete().then(this.setTitle)
    this.title$.subscribe(this.setTitle)
  }

  private setTitle = () =>{
    const timestamp = new Date().getMilliseconds();
    this.title = `Nauka Angulara (${timestamp})` 
  }

  private changeTitle (callback:Function){
    // setTimeout(()=>{
    //   callback()
    // },2000)
    setInterval(()=>{
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
