import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { EditWorkoutService } from './edit-workout.service';
import { Workout } from '../models/workout.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css'],
  providers: [ EditWorkoutService ]
})
export class EditWorkoutComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public workout : Workout;

  constructor(private editWorkoutService: EditWorkoutService, private router: Router, private commonService: CommonService) {
  	this.workout = new Workout();
  }

  ngOnInit(){
    this.commonService.workoutEdit_Observable.subscribe(res => {
      this.workout = this.commonService.workout_to_be_edited;
      console.log('ngOnit: workout to Edit is ', this.workout._id);
    });
  }

  editWorkout() {
  	if(this.workout.title && this.workout.description && this.workout.trainer && this.workout.summary){
    	  console.log('editworkoutupdate');
          this.editWorkoutService.updateWorkout(this.workout).subscribe(res =>{
             this.closeBtn.nativeElement.click();
             this.commonService.notifyWorkoutAddition();
        });
  	} else {
  	   alert('Title, Summary, Trainer,  and Description required');
  	}
   }

     saveAsWorkout() {
  	if(this.workout.title && this.workout.description && this.workout.trainer && this.workout.summary){
    	  console.log('saveAsworkoutupdate');
          this.editWorkoutService.saveAsWorkout(this.workout).subscribe(res =>{
             this.closeBtn.nativeElement.click();
             this.commonService.notifyWorkoutAddition();
        });
  	} else {
  	   alert('Title, Summary, Trainer,  and Description required');
  	}
   }
}
