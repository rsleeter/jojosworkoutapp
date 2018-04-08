import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workout } from '../models/workout.model';

@Injectable()
export class EditWorkoutService {

	constructor(private http: HttpClient){

	}
	

	updateWorkout(workout: Workout){
		return this.http.post('/api/workout/updateWorkout',{
			id: workout._id,
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


	saveAsWorkout(workout: Workout){
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