import * as inputs from './inputs';

/**
 * Get amount of money for index place in queue.
 *
 * @param {number} indexInQueue - Current index in queue.
 * @param {number} maxPlaces - Maximum places in train.
 * @param {number} groups - List of groups.
 * @returns {Object} Amount for index and next index.
 */
function getAmountForIndex(indexInQueue: number, maxPlaces: number, groups: number[]): Object {
  let currentGroupIndex: number = indexInQueue;
  let placesFilled: number = 0;

  do {
    placesFilled += groups[currentGroupIndex];
    currentGroupIndex = (currentGroupIndex + 1) % groups.length;
  } while (
    placesFilled + groups[currentGroupIndex] <= maxPlaces &&
    currentGroupIndex !== indexInQueue
  );

  return {
    amount: placesFilled,
    next_index: currentGroupIndex,
  };
}

/**
 * Get total amount of money for the day.
 *
 * @param {number} indexInQueue - Current index in queue.
 * @param {number} maxPlaces - Maximum places in train.
 * @param {number} groups - List of groups.
 * @returns {number} Total amount of money.
 */
function getMoneyAmount(maxPlaces: number, maxTurns: number, groups: number[]): number {
  let moneyAmount: number = 0;
  let indexInQueue: number = 0;
  const mapPerIndex: Object = {};
  for (let i = 0; i < maxTurns; i += 1) {
    if (!mapPerIndex[indexInQueue]) {
      mapPerIndex[indexInQueue] = getAmountForIndex(indexInQueue, maxPlaces, groups);
    }

    moneyAmount += mapPerIndex[indexInQueue].amount;
    indexInQueue = mapPerIndex[indexInQueue].next_index;
  }

  return moneyAmount;
}

(async function main() {
  const { maxPlaces, maxTurns, groups }: inputs.Inputs = await inputs.get();
  const amount: number = getMoneyAmount(maxPlaces, maxTurns, groups);

  console.log(amount);
})();
