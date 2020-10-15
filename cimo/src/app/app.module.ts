import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplatesComponent } from './templates/templates.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';


//Material and CDK
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './users/list/list.component';
import { AddComponent } from './users/add/add.component';
import { ManagementCimoComponent } from './management-cimo/management-cimo.component';
import { VideoconferencesComponent } from './management-cimo/videoconferences/videoconferences.component';
import { ChatComponent } from './management-cimo/chat/chat.component';
import { PayrollComponent } from './payroll/payroll.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { ErrorControlComponent } from './error-control/error-control.component';
import { PrincipalpageComponent } from './principalpage/principalpage.component';
import { CimoComponent } from './cimo/cimo.component';
import { PaymentComponent } from './payment/payment.component';
import { SitePoliciesComponent } from './site-policies/site-policies.component';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';
import { TechnicalSupportComponent } from './technical-support/technical-support.component';


//Services
import { HttpClientModule } from '@angular/common/http';
import { LogInService } from '../app/Service/log-in.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { PacientComponent } from './dashboard/pacient/pacient.component';
import { ChatfrontendComponent } from './cimo/chatfrontend/chatfrontend.component';
import { VideoconferencefrontendComponent } from './cimo/videoconferencefrontend/videoconferencefrontend.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    TemplatesComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    ListComponent,
    AddComponent,
    ManagementCimoComponent,
    VideoconferencesComponent,
    ChatComponent,
    PayrollComponent,
    StatisticalComponent,
    ErrorControlComponent,
    PrincipalpageComponent,
    CimoComponent,
    PaymentComponent,
    SitePoliciesComponent,
    FrequentQuestionsComponent,
    TechnicalSupportComponent,
    DashboardComponent,
    AdminComponent,
    DoctorComponent,
    PacientComponent,
    ChatfrontendComponent,
    VideoconferencefrontendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ LogInService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
