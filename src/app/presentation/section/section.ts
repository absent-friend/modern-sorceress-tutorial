import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'sorc-section',
  styleUrl: './section.scss',
  templateUrl: './section.html',
})
export class Section {
  title = input.required<string>()
}
