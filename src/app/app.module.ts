import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/home/home_components/sidebar/sidebar.component';
import { ShowcaseComponent } from './components/home/home_components/showcase/showcase.component';
import { MainComponent } from './components/home/home_components/main/main.component';
import { PreviousVideosComponent } from './components/home/home_components/main/previous-videos/previous-videos.component';
import { AdminDataComponent } from './components/home/home_components/sidebar/admin-data/admin-data.component';
import { ArchivedVideosComponent } from './components/home/home_components/sidebar/archived-videos/archived-videos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestVideoComponent } from './components/home/home_components/main/latest-video/latest-video.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OtherPagesComponent } from './components/other-pages/other-pages.component';
import { ServicesComponent } from './components/other-pages/services/services.component';
import { ClientsComponent } from './components/other-pages/clients/clients.component';
import { AboutComponent } from './components/other-pages/about/about.component';
import { ContactComponent } from './components/other-pages/contact/contact.component';
import { TestimonyComponent } from './components/other-pages/testimony/testimony.component';
import { RecentVideosComponent } from './components/home/home_components/recent-videos/recent-videos.component';

//services


//routes and their corresponding components
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'about_us', component: OtherPagesComponent}
]

//container for the components, imported modules, provided services, bootstraped AppComponent
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    ShowcaseComponent,
    MainComponent,
    PreviousVideosComponent,
    AdminDataComponent,
    ArchivedVideosComponent,
    FooterComponent,
    LatestVideoComponent,
    EventsComponent,
    GalleryComponent,
    OtherPagesComponent,
    ServicesComponent,
    ClientsComponent,
    AboutComponent,
    ContactComponent,
    TestimonyComponent,
    RecentVideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
