import { IOffer } from './offer.interface';

export interface IKind {
  id: string;
  kind: string;
  items: IOffer[];
}
