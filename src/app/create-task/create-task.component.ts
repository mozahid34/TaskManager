import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tasktype } from '../Model/tasktype';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  createForm:FormGroup;

  tasks:tasktype[] = [];
  view:boolean = false;
  errMsg:string = "";
  err:boolean = false;

  constructor(private formBuild:FormBuilder,  private http:HttpClient) {
    this.createForm = formBuild.group({
      taskname: new FormControl('', [Validators.required]),
      datentime:new FormControl(''),
      taskdetails:new FormControl(''),
      place: new FormControl(''),
      categories: new FormControl('Todo'),
      sbname:new FormControl('', [Validators.required]),

      

    })

   

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.onSubmit();

    // this.getData();
    
    
  }
  
  onSubmit() {
    const taskList =this.createForm.value;

    if(taskList.taskname != "") {
      this.tasks.push(taskList);
      this.createForm.reset();

    }
    else if(taskList.place != "") {
      this.tasks.push(taskList);
      this.createForm.reset();

    }
    else if(taskList.sbname != "") {
      this.tasks.push(taskList);
      this.createForm.reset();

    }
    else {
      this.errMsg = "Required Field Can't be Empty"
      this.err = true;

    }
   
    
   
    // const url = `https://taskmanage-4734f-default-rtdb.firebaseio.com/`;
    // this.http.post(`https://taskmanage-4734f-default-rtdb.firebaseio.com/tasks.json`,taskList).subscribe((res) => {
    //   console.log(res)
    // })
    


  }

  showTask() {
    this.view = !this.view;

  }

  getData(e: tasktype) {
    
    console.log(e);
    this.createForm.setValue({
      taskname:e.taskname,
      sbname:e.sbname
    })
    
  }

  




}


