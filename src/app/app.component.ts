import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { nasaAPOD } from './nasa.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Q12_nasaService';
  nasaService = inject(NasaService);
  nasaPic: string = '';
  nasaAPOD!: nasaAPOD;
  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      console.table(data);
      this.nasaAPOD = data;
    });
  }
}
