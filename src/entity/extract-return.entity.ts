export interface ExtractReturn {
  dateEmiss: { value: string };
  mothRef: { value: string; dateNumber: number };
  numClient: { value: string };
  numInstall: { value: string };
  energyElectric: { value: string; quantity: string };
  energyIsent: { value: string; quantity: string };
  energyCompensated: { value: string; quantity: string };
  contribIlumPublic: { value: string; quantity?: string };
}
