import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShowWorkoutService } from './show-workout.service';
import { CommonService } from '../service/common.service';
import { Workout } from '../models/workout.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-workout',
  templateUrl: './show-workout.component.html',
  styleUrls: ['./show-workout.component.css'],
  providers: [ ShowWorkoutService ]
})

export class ShowWorkoutComponent implements OnInit {
 
  @ViewChild('closeBtn') closeBtn: ElementRef;

  public workouts : any [];
  public workout_to_delete;
  public workout_to_show;
  public searchString: string;
 
  constructor(private showWorkoutService: ShowWorkoutService, private commonService: CommonService, private route: ActivatedRoute) {
       
  }

  ngOnInit(){
    this.getAllWorkout();
    this.commonService.workoutAdded_Observable.subscribe(res=> {
        this.getAllWorkout();
    });
  }
 
  getAllWorkout(){
    this.showWorkoutService.getAllWorkout().subscribe(result => {
        this.workouts = result['data'];
    });
  }

  editWorkout(workout: Workout){
    this.commonService.setWorkoutToEdit(workout);
  }

  setDelete(workout: Workout){
    this.workout_to_delete = workout;
  }

  unsetDelete(){
    this.workout_to_delete = null;
  }

  deleteWorkout(){
    this.showWorkoutService.deleteWorkout(this.workout_to_delete._id).subscribe(res => {
       this.getAllWorkout();
       this.closeBtn.nativeElement.click();
  })
}
    
}