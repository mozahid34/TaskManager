import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { tasktype } from '../Model/tasktype';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
  providers:  [ CreateTaskComponent ]
})
export class ViewTaskComponent implements OnInit {
  @Input() alltasks:any;
  @Output() emitedTask = new EventEmitter<tasktype>();

  

  constructor(private http:HttpClient, private CreateComp:CreateTaskComponent) {

  }
  ngOnInit(): void {
  
    
    
  }

  showAll() {
    // this.http.get('https://taskmanage-4734f-default-rtdb.firebaseio.com/tasks.json')
    // .pipe(map((res:{[key:string]:any}) => {
      
    //   const tsk = [];
    //   for (const key in res) {
    //     if(res.hasOwnProperty(key)) {
    //       tsk.push({...res[key], id:key})
    //     }

    //   }
    //   return tsk;
    // }))
    // .subscribe((tsk) => {
    //   this.alltasks = tsk;
    //   console.log(this.alltasks);
    // })
  }

  onDel(id:any) {
  
      // this.http.delete(`https://taskmanage-4734f-default-rtdb.firebaseio.com/tasks/${id}.json`)
      // .subscribe((res)=> {
      //   this.showAll();
      // })
      this.alltasks.splice(id,1);
    

  }
  onEdit() {
    this.emitedTask.emit(this.alltasks);

  }

  
  
  }




