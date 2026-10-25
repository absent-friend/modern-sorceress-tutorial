import { Component, computed, input } from '@angular/core';
import { Icon } from '../arena-icon-attributes';
import { NgOptimizedImage, NgClass } from '@angular/common';

interface ImageProperties {
  readonly src: string,
  readonly height: number,
  readonly width: number
}

@Component({
  imports: [NgOptimizedImage, NgClass],
  selector: 'sorc-arena-icon',
  styleUrl: './arena-icon.scss',
  templateUrl: './arena-icon.html',
  host: {
    '[style.--top]': '`${top()}%`',
    '[style.--left]': '`${left()}%`'
  }
})
export class ArenaIcon {
  public readonly icon = input.required<Icon>();
  public readonly top = input.required<number>();
  public readonly left = input.required<number>();
  public readonly rotate = input<number>();
  public readonly label = input<string>();
  public readonly selected = input<boolean>();

  readonly imageProperties = computed(() => this.getImageProperties(this.icon()));

  private getImageProperties(icon: Icon): ImageProperties {
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
      case 'cannon':
        return {
          src: '/assets/images/cannon-white-border.png',
          height: 91,
          width: 40
        }
      case 'tank':
        return {
          src: '/assets/images/tank-white-border.png',
          height: 69,
          width: 40
        }
    }
  }
}
