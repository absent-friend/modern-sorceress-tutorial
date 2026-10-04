import { Service, signal } from '@angular/core';
import { ArenaData } from './arena-data';

@Service()
export class Arena {
    public readonly layout = signal<ArenaData>({});
}
