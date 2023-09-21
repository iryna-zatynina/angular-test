import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisivle$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isVisivle$.next(true)
  }

  close() {
    this.isVisivle$.next(false)
  }
}
