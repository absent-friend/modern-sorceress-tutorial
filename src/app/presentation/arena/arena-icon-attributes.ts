export type Icon = 'sorceress' | 'spyro' | 'cannon' | 'tank';

export interface ArenaIconAttributes {
  readonly icon: Icon,
  // unit: %
  readonly top: number,
  // unit: %
  readonly left: number,
  // unit: deg
  readonly rotate?: number,
  readonly label?: string,
  readonly selected?: boolean
}