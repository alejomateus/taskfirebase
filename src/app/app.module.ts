import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ConexionService} from './services/conexion.service';
import { ListComponent } from './components/list/list.component';
import { FormaddComponent } from './components/formadd/formadd.component';
import { FormsModule }from '@angular/forms';

@NgModule({
  declarations: [
  AppComponent,
  ListComponent,
  FormaddComponent
  ],
  imports: [
  BrowserModule,
  FormsModule
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
  ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
