import { Component, Input } from '@angular/core';
import { ITutor } from 'src/app/shared/models/tutor.model';

@Component({
  selector: 'app-tutor-card-item',
  templateUrl: './tutor-card-item.component.html',
  styleUrls: ['./tutor-card-item.component.css']
})
export class TutorCardItemComponent {
  @Input() tutor!: ITutor;
}
