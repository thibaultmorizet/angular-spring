import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private subject = new Subject<string|null>()
  constructor() { }
  sendData(data: string|null) {
    this.subject.next(data);
  }
  getData() {
    return this.subject
  }
}
