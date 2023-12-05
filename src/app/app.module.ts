import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Route[] = [
  {
    path: '',
    component: NavbarComponent
  },
  {
    path: 'tdform',
    component: TdFormComponent
  },
  {
    path: 'reactiveform',
    component: ReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TdFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
