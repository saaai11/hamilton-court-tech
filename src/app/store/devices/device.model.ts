export interface Device {
  id: number;
  type: string;
  description: string;
  empIds: number;
}

export interface Devices {
  devices: Device[];
}
