import { Routes } from '@angular/router';
import { DiagramTester } from './debug/diagram-tester/diagram-tester';

export const routes: Routes = [
    {
        path: 'debug/diagram',
        component: DiagramTester
    }
];
