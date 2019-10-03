import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SocketIOService } from 'src/services/socket.io.service';
import { CitiesService } from 'src/services/cities.service';
import { HttpClientModule } from '@angular/common/http';
import { DegreesPipe } from './pipes/degrees.pipe';
import { TimeOnlyPipe } from './pipes/time-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoaderComponent,
    DegreesPipe,
    TimeOnlyPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [
    SocketIOService,
    CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
