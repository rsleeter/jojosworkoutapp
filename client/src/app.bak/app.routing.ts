import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { SearchWorkoutComponent } from './search-workout/search-workout.component';
import { ShowWorkoutComponent } from './show-workout/show-workout.component';
import { ShowWorkoutDetailComponent } from './show-workout-detail/show-workout-detail.component';

export const AppRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'add', component: AddWorkoutComponent },
	{ path: 'searchWorkout', component: SearchWorkoutComponent },
	{ path: 'detail/:id', component: ShowWorkoutDetailComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);