import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from "./app.module";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'MyWebsiteNew';
}
