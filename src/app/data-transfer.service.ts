import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  changeData(data: any) {
    this.dataSource.next(data);
  }
}
