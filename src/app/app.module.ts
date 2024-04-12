import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { appConfig } from './app.config';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ScrollToDirective } from './scroll-to.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ScrollToDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [appConfig.providers],
  bootstrap: [HomeComponent]
})
export class AppModule { }
