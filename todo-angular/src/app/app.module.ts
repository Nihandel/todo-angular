import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TodoInMemoryPersistencyService } from './services/persistency/todo-in-memory-persistency.service';
import { APersistency } from './services/persistency/a-persistency';
import { TodoPersistenceService } from './services/todo-persistence.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    HomePageComponent
  ],
  providers: [{ provide: APersistency, useClass: TodoInMemoryPersistencyService }, TodoPersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
