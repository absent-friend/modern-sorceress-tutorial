import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ArenaDiagram } from '../../presentation/arena/arena-diagram/arena-diagram';
import { Arena } from '../../presentation/arena/arena';
import { ArenaData } from '../../presentation/arena/arena-data';

@Component({
  imports: [ArenaDiagram, FormField],
  selector: 'sorc-diagram-tester',
  styleUrl: './diagram-tester.scss',
  templateUrl: './diagram-tester.html',
})
export class DiagramTester {
  readonly layoutModel = signal({
    layout: ''
  });
  readonly layoutForm = form(this.layoutModel);

  private readonly arena = inject(Arena);

  updateLayout() {
    try {
      const layoutJSON = this.layoutModel().layout;
      const layout: ArenaData = JSON.parse(layoutJSON);
      this.arena.layout.set(layout);
    } catch (error) {
      console.error(`Failed to update layout: ${error}`);
    }
  }
}
