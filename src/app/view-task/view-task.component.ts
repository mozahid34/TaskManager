import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  alltasks:any = [];

  constructor(private http:HttpClient) {



  }
  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.http.get('https://taskmanage-4734f-default-rtdb.firebaseio.com/tasks.json')
    .pipe(map((res:{[key:string]:any}) => {
      
      const tsk = [];
      for (const key in res) {
        if(res.hasOwnProperty(key)) {
          tsk.push({...res[key], id:key})
        }

      }
      return tsk;
    }))
    .subscribe((tsk) => {
      this.alltasks = tsk;
      console.log(this.alltasks);
    })
  }

  onDel(id:any) {
  
      this.http.delete(`https://taskmanage-4734f-default-rtdb.firebaseio.com/tasks/${id}.json`)
      .subscribe((res)=> {
        this.showAll();
      })
    
  }
  
  }




