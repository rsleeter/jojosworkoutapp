import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Workout } from '../models/workout.model';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-search-workout',
  templateUrl: './search-workout.component.html',
  styleUrls: ['./search-workout.component.css']
})
export class SearchWorkoutComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public workout : Workout;

  constructor(private router: Router, private commonService: CommonService) {
  }

  ngOnInit(){
  }

  searchWorkout() {
  }


}