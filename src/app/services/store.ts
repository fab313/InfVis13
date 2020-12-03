import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {
    public state$: Observable<T>;
    private stateSubject$: BehaviorSubject<T>;
    public isLoadingData$ = new BehaviorSubject(true);

    protected constructor(initialState: T) {
        this.stateSubject$ = new BehaviorSubject(initialState);
        this.state$ = this.stateSubject$.asObservable();
    }

    get state(): T {
        return this.stateSubject$.getValue();
    }

    public setState(nextState: T): void {
        this.stateSubject$.next(nextState);
        this.isLoadingData$.next(false);
        this.isLoadingData$.complete();
    }
}
