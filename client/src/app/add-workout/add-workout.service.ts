import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from '../models/workout.model';

@Injectable()
export class AddWorkoutService {

	constructor(private http: HttpClient){

	}
	
	addWorkout(workout: Workout){
		return this.http.post('/api/workout/createWorkout',{
			title : workout.title,
			description : workout.description,
                        summary: workout.summary,
			trainer: workout.trainer,
			tags: workout.tags,
			type: workout.type,
			lastclass: workout.lastclass,
			lastused: workout.lastused
		})
	}

}