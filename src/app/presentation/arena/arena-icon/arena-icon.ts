import { Component, computed, input } from '@angular/core';
import { ArenaCoordinate } from '../arena-coordinate';
import { NgOptimizedImage } from '@angular/common';

type Icon = 'sorceress' | 'spyro';

interface IconAttributes {
  readonly src: string,
  readonly height: number,
  readonly width: number
}

@Component({
  imports: [NgOptimizedImage],
  selector: 'sorc-arena-icon',
  styleUrl: './arena-icon.scss',
  templateUrl: './arena-icon.html',
  host: {
    '[style.--top]': 'position().top + "px"',
    '[style.--left]': 'position().left + "px"'
  }
})
export class ArenaIcon {
  readonly icon = input.required<Icon>();
  readonly position = input.required<ArenaCoordinate>();

  readonly attributes = computed(() => this.getAttributes(this.icon()));

  private getAttributes(icon: Icon): IconAttributes {
    switch (icon) {
      case 'sorceress':
        return {
          src: '/assets/images/sorc-white-border.png',
          height: 43,
          width: 40
        };
      case 'spyro':
        return {
          src: '/assets/images/spyro-white-border.png',
          height: 61,
          width: 40
        };
    }
  }
}
