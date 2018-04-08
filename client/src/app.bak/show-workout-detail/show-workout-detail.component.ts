import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ShowWorkoutService } from '../show-workout//show-workout.service';
import { CommonService } from '../service/common.service';
import { Workout } from '../models/workout.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-workout-detail',
  templateUrl: './show-workout-detail.component.html',
  styleUrls: ['./show-workout-detail.component.css'],
  providers: [ ShowWorkoutService ]
})

export class ShowWorkoutDetailComponent implements OnInit {

  public  workout: Workout;
  
  constructor(
     private showWorkoutService: ShowWorkoutService, 
     private commonService: CommonService, 
     private route: ActivatedRoute, 
     private location: Location 
   ) {}

  ngOnInit(): void{
    this.getWorkout();
  }
 
  getWorkout(): void {
     const id = this.route.snapshot.paramMap.get('id');
         this.showWorkoutService.getWorkout(id).subscribe(result => {    
         this.workout = result['data'];
   });
  }
}