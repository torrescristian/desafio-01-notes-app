import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { SheetComponent } from './components/sheet/sheet.component';
import { MarkdownModule } from 'ngx-markdown';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatExpansionModule, MatCardModule, MatInputModule } from '@angular/material';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ButtonComponent } from './components/button/button.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducers';
import { environment } from 'src/environments/environment';
import { EndEditButtonComponent } from './components/end-edit-button/end-edit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EditButtonComponent,
    CreateButtonComponent,
    DeleteButtonComponent,
    SheetComponent,
    ListComponent,
    HeaderComponent,
    ListItemComponent,
    ButtonComponent,
    EndEditButtonComponent,
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
