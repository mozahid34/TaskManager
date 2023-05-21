import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  createForm:FormGroup;

  tasks:Array<object> = [{}];

  constructor(private formBuild:FormBuilder, private http:HttpClient) {
    this.createForm = formBuild.group({
      taskname:'',
      datentime:'',
      taskdetails:'',
      place:'',
      categories:'',
      sbname:'',

      

    })

   

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.onSubmit();
    
  }
  
  onSubmit() {
    console.log(this.createForm.value);
    const taskList =this.createForm.value;
    const url = `https://taskmanage-4734f-default-rtdb.firebaseio.com/`;
    this.http.post(`https://taskmanage-4734f-default-rtdb.firebaseio.com/tasks.json`,taskList).subscribe((res) => {
      console.log(res)
    })

    this.createForm.reset();


  }




}


