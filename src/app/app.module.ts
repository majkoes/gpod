import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImportDetailComponent } from './import-detail.component';
import { ImportComponent } from './import.component';
import { RibsService } from './ribs.service';
import { SomethingElseComponent } from './something-else.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportDetailComponent,
    ImportComponent,
    SomethingElseComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
        path: 'imports',
        component: ImportComponent
    },
    {
        path: 'somethingelse',
        component: SomethingElseComponent
    },
    {
      path: '',
      redirectTo: '/imports',
      pathMatch: 'full'
    }])
  ],
  providers: [RibsService],
  bootstrap: [AppComponent]
})


export class AppModule { }