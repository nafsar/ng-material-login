import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MatInputModule, MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material';
import { MaterialComponent } from './material-component/material-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
