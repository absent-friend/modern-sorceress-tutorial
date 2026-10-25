import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ArenaIcon } from '../arena-icon/arena-icon';
import { ArenaData } from '../arena-data';

@Component({
  imports: [
    NgOptimizedImage,
    ArenaIcon
  ],
  selector: 'sorc-arena-diagram',
  styleUrl: './arena-diagram.scss',
  templateUrl: './arena-diagram.html',
})
export class ArenaDiagram {
  public readonly layout = input.required<ArenaData>();
}
