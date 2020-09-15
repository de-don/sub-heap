import { SubHeap } from '../index';
import { interval, of } from 'rxjs';

test('SubHeap', () => {
  // Generate two subscriptions
  const subscription1 = interval(1).subscribe();
  const subscription2 = interval(2).subscribe();

  // Check that both subscriptions opened
  expect(subscription1.closed).toBeFalsy();
  expect(subscription2.closed).toBeFalsy();

  // Create new sub-heap
  const subHeap = new SubHeap();

  // Push both subscriptions to sub-heap
  subHeap.add(subscription1);
  subHeap.sub = subscription2;
  expect(subHeap.size).toBe(2);

  // Unsubscribe and check that both subscriptions closed
  subHeap.unsubscribe();
  expect(subHeap.size).toBe(0);
  expect(subscription1.closed).toBeTruthy();
  expect(subscription2.closed).toBeTruthy();
});
