const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


function reducer(totalAmount, currentBatch) {
  return totalAmount + currentBatch;
}

const totalBatteries = batteryBatches.reduce(reducer, 0);
