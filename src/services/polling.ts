export interface PollingEntry {
  city: string;
  lat: number;
  lon: number;
}

class PollingService {
  private pollingList: PollingEntry[] = [];

  add(city: string, lat: number, lon: number) {
    console.log('adding to the polling service', this.pollingList);
    const exists = this.pollingList.some(entry => entry.city.toLowerCase() === city.toLowerCase())
    if (!exists) {
      this.pollingList.push({ city, lat, lon });
    }
  }

  getAll() {
    return this.pollingList;
  }
}
// creating a singleton class object
export const pollingService = new PollingService();