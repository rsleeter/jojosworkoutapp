import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AddWorkoutService } from './add-workout.service';
import { Workout } from '../models/workout.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css'],
  providers: [ AddWorkoutService ]
})
export class AddWorkoutComponent {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public workout : Workout;
  public new_descr: String

  constructor(private addWorkoutService: AddWorkoutService, private router: Router, private commonService: CommonService) {
  	this.workout = new Workout();
	this.workout.trainer = "Jojo";
	this.workout.type = "Any";
  }


 addWorkout() {
  	if(this.workout.title && this.workout.description && this.workout.trainer && this.workout.summary){
	  this.new_descr = this.workout.description.replace(new RegExp('\r?\n', 'g'), '<br>');
	  this.workout.description = this.new_descr;
          this.addWorkoutService.addWorkout(this.workout).subscribe(res =>{
            this.closeBtn.nativeElement.click();
            this.commonService.notifyWorkoutAddition();
          });
        } else {
  		alert('Title, Summary, Trainer,  and Description required');
  	}
   }
}
