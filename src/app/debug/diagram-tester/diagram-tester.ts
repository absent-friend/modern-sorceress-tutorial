import { Component, linkedSignal, signal } from '@angular/core';
import { FieldState, form, FormField } from '@angular/forms/signals';
import { ArenaDiagram } from '../../presentation/arena/arena-diagram/arena-diagram';
import { ArenaData } from '../../presentation/arena/arena-data';
import { icons } from '../../presentation/arena/arena-constants';
import { ArenaIconAttributes } from '../../presentation/arena/arena-icon-attributes';

type IconConstants = typeof icons;
type SorceressPosition = keyof IconConstants['sorc'] | '';
type SpyroPosition = keyof IconConstants['spyro'] | '';
type TankPositions = { [Position in keyof IconConstants['tank']]: boolean };
type CannonPositions = { [Position in keyof IconConstants['cannon']]: boolean };

interface DiagramForm {
  sorceress: SorceressPosition,
  spyro: SpyroPosition,
  tanks: TankPositions,
  cannons: CannonPositions
}

@Component({
  imports: [ArenaDiagram, FormField],
  selector: 'sorc-diagram-tester',
  styleUrl: './diagram-tester.scss',
  templateUrl: './diagram-tester.html',
})
export class DiagramTester {
  readonly layoutModel = signal<DiagramForm>({
    sorceress: '',
    spyro: '',
    tanks: {
      'A-B': false,
      'B-C': false,
      'C-D': false,
      'D-E': false,
      'E-A': false
    },
    cannons: {
      'A': true,
      'B': true,
      'C': true,
      'D': true,
      'E': true
    }
  });
  readonly form = form(this.layoutModel);

  readonly layout = linkedSignal({
    source: this.form,
    computation: (form) => this.mapToArenaData(form)
  });

  private mapToArenaData(form: FieldState<DiagramForm>): ArenaData {
    const fields = form.value();
    const elements: ArenaIconAttributes[] = [];
    
    const tankPositions = this.form.tanks().value();
    Object.keys(tankPositions)
      .filter(k => tankPositions[k as keyof TankPositions])
      .map(k => icons.tank[k as keyof TankPositions])
      .forEach(tank => elements.push(tank));
    
    const cannonPositions = this.form.cannons().value();
    Object.keys(cannonPositions)
      .filter(k => cannonPositions[k as keyof CannonPositions])
      .map(k => icons.cannon[k as keyof CannonPositions])
      .forEach(cannon => elements.push(cannon));
    
    if (fields.spyro) {
      elements.push(icons.spyro[fields.spyro]);
    }
    
    if (fields.sorceress) {
      elements.push(icons.sorc[fields.sorceress]);
    }

    return { elements: elements };
  }
}
