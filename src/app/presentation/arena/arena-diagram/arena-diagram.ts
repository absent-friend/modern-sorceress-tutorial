import { Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Arena } from '../arena';
import { ArenaData, CannonPosition, SorceressPosition, SpyroPosition, TankPosition } from '../arena-data';
import { ArenaCoordinate } from '../arena-coordinate';
import { ArenaIcon } from '../arena-icon/arena-icon';

interface ArenaCoordinates {
  readonly cannons?: ArenaCoordinate[],
  readonly tanks?: ArenaCoordinate[],
  readonly sorceress?: ArenaCoordinate,
  readonly spyro?: ArenaCoordinate
}

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
  private readonly arena = inject(Arena);
  readonly layout = computed(() => this.getCoordinates(this.arena.layout()));

  private getCoordinates(layout: ArenaData): ArenaCoordinates {
    let cannons = undefined;
    if (layout.cannons) {
      cannons = layout.cannons.map(this.mapCannonCoordinate);
    }

    let tanks = undefined;
    if (layout.tanks) {
      tanks = layout.tanks.map(this.mapTankCoordinate);
    }

    let sorceress = undefined;
    if (layout.sorceress) {
      sorceress = this.mapSorceressCoordinate(layout.sorceress);
    }

    let spyro = undefined;
    if (layout.spyro) {
      spyro = this.mapSpyroPosition(layout.spyro);
    }
    
    return { cannons, tanks, sorceress, spyro };
  }

  private mapCannonCoordinate(cannon: CannonPosition): ArenaCoordinate {
    switch (cannon) {
      case 'A':
        return { top: 0, left: 0 };
      case 'B':
        return { top: 0, left: 0 };
      case 'C':
        return { top: 0, left: 0 };
      case 'D':
        return { top: 0, left: 0 };
      case 'E':
        return { top: 0, left: 0 };
    }
  }

  private mapTankCoordinate(tank: TankPosition): ArenaCoordinate {
    switch (tank) {
      case 'A-B':
        return { top: 0, left: 0 };
      case 'B-C':
        return { top: 0, left: 0 };
      case 'C-D':
        return { top: 0, left: 0 };
      case 'D-E':
        return { top: 0, left: 0 };
      case 'E-A':
        return { top: 0, left: 0 };
    }
  }

  private mapSorceressCoordinate(sorceress: SorceressPosition): ArenaCoordinate {
    switch (sorceress) {
      case 'attack-rush-C':
        return { top: 0, left: 0 };
      case 'attack-rush-D':
        return { top: 0, left: 0 };
      case 'attack-rush-E':
        return { top: 0, left: 0 };
      case 'attack-C':
        return { top: 0, left: 0 };
      case 'attack-D':
        return { top: 0, left: 0 };
      case 'attack-E':
        return { top: 0, left: 0 };
      case 'center':
        return { top: 253.5, left: 255 };
      case 'A':
        return { top: 380, left: 340 };
      case 'B':
        return { top: 380, left: 165 };
      case 'C':
        return { top: 205, left: 110 };
      case 'D':
        return { top: 100, left: 255 };
      case 'E':
        return { top: 205, left: 400 };
    }
  }

  private mapSpyroPosition(spyro: SpyroPosition): ArenaCoordinate {
    switch (spyro) {
      case 'spawn':
        return { top: 0, left: 0 };
      case 'A':
        return { top: 0, left: 0 };
      case 'B':
        return { top: 0, left: 0 };
      case 'C':
        return { top: 0, left: 0 };
      case 'D':
        return { top: 0, left: 0 };
      case 'E':
        return { top: 0, left: 0 };
      case 'dead-zone-C':
        return { top: 0, left: 0 };
      case 'dead-zone-D':
        return { top: 0, left: 0 };
      case 'dead-zone-E':
        return { top: 0, left: 0 };
    }
  }
}
