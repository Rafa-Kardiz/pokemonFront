import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  calculatePaginator(pageSize: number, pageIndex: number): string {
    const limit = `&limit=${pageSize}`;
    const offset = `offset=${pageIndex * pageSize}`;
    return `?${offset}${limit}`
  }
}
