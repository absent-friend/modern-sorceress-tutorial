export type CannonPosition = 'A' | 'B' | 'C' | 'D' | 'E';
export type TankPosition = 'A-B' | 'B-C' | 'C-D' | 'D-E' | 'E-A';
export type Selection = CannonPosition | TankPosition;
export type SorceressPosition = 'attack-rush-C' | 'attack-rush-D' | 'attack-rush-E' | 'attack-C' | 'attack-D' | 'attack-E' | 'center' | CannonPosition;
export type SpyroPosition = 'spawn' | 'dead-zone-C' | 'dead-zone-D' | 'dead-zone-E' | CannonPosition;

export interface ArenaData {
  cannons?: CannonPosition[],
  tanks?: TankPosition[],
  select?: Selection,
  sorceress?: SorceressPosition,
  spyro?: SpyroPosition
}
