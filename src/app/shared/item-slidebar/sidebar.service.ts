import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidebarService {
    private closeSourceSubject: Subject<any> = new Subject<any>();
    public closeSourceSubject$ = this.closeSourceSubject.asObservable();

    onDeactivateSidebar(component: any) {
        this.closeSourceSubject.next(component);
    }
}
