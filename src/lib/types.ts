export interface ServiceData {
  name: string;
  description?: string;
  tags?: string[];
  logo?: string;
  link: string;
}

export interface GroupData {
  name: string;
  description?: string;
  services: ServiceData[];
}

export interface ShowcaseData {
  groups: GroupData[]
}
