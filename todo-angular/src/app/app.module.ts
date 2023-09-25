import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbDialogModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TodoInMemoryPersistencyService } from './services/persistency/todo-in-memory-persistency.service';
import { APersistency } from './services/persistency/a-persistency';
import { TodoPersistenceService } from './services/todo-persistence.service';
import { AddTodoModalComponent } from './components/modals/add-todo-modal/add-todo-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { TodoBrowserDbPersistencyService } from './services/persistency/todo-browser-db-persistency.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NgxIndexedDBModule.forRoot({name:"todos",version:1,isDefault:true,objectStoresMeta:[
      {store:'todos',storeConfig:{keyPath:'id',autoIncrement:true},storeSchema:[
        {name:'title',keypath:'title',options:{unique:false}},
        {name:'description',keypath:'description',options:{unique:false}}
      ]}
    ]}),
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    HomePageComponent,
    CommonModule,
    FormsModule,
    BrowserModule,
    NbCardModule,
    NbInputModule,
  ],
  providers: [{ provide: APersistency, useClass: TodoBrowserDbPersistencyService }, TodoPersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
