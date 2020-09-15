import { Subscription } from 'rxjs';

/** Class to store all subscriptions to unsubscribe */
export class SubHeap {
  private subscriptions: Subscription[] = [];

  /** Shortcut to add new subscription */
  public set sub(value: Subscription) {
    this.add(value);
  }

  /** Add new subscription */
  public add(value: Subscription): void {
    this.subscriptions.push(value);
  }

  /** Unsubscribe */
  public unsubscribe(): void {
    this.subscriptions.forEach(s => {
      if (s && typeof s.unsubscribe === 'function') {
        s.unsubscribe();
      }
    });
  }
}
