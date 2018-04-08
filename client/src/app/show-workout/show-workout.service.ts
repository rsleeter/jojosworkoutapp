import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ShowWorkoutService {
       constructor(private http: HttpClient){
        }
 
       getAllWorkout(){
	  return this.http.post('/api/workout/getAllWorkout', {})
       }

       getWorkout(id){  
          console.log('got here in getWorkout with id = ', id);
          return this.http.post('/api/workout/getWorkout', {id: id})
       }

       deleteWorkout(id){
          return this.http.post('/api/workout/deleteWorkout', {id: id})
      }

}