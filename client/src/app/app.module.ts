import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowWorkoutComponent } from './show-workout/show-workout.component';
import { ShowWorkoutDetailComponent } from './show-workout-detail/show-workout-detail.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { SearchWorkoutComponent } from './search-workout/search-workout.component';
import { CommonService } from './service/common.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
  	RootComponent,
    LoginComponent,
    HomeComponent,
    ShowWorkoutComponent,
    ShowWorkoutDetailComponent,
    AddWorkoutComponent,
    EditWorkoutComponent,
    SearchWorkoutComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    FilterPipe
 ],

  providers: [CommonService],
  bootstrap: [RootComponent]
})
export class AppModule { }
