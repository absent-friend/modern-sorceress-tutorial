import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'sorc-chapter',
  styleUrl: './chapter.scss',
  templateUrl: './chapter.html',
})
export class Chapter {
  title = input.required<string>();
}
