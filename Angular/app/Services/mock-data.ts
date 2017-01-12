import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MockDataService implements InMemoryDbService {
  createDb() {
    let brands = [
      {id: 11, name: '12 Survivors'},
      {id: 12, name: '5.11'},
      {id: 13, name: '5.11 Tctical Series'},
      {id: 14, name: 'AccuSharp'},
      {id: 15, name: 'Adam Unlimited'},
      {id: 16, name: 'Adventure Medical Kits'},
      {id: 17, name: 'Al Mar'},
      {id: 18, name: 'Alar-DISC'},
      {id: 19, name: 'Alpen'},
      {id: 20, name: 'Alps Cedar Ridge'}
    ];
    return {brands};
  }
}