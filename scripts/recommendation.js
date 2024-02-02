// Your sorting algorithm functions
function insertionSort(arr) { /* ... */ }
function quickSort(arr) { /* ... */ }
function mergeSort(arr) { /* ... */ }
function heapSort(arr) { /* ... */ }
function selectionSort(arr) { /* ... */ }

// Calculate average execution time
function measureExecutionTime(sortFunction, arrSize) {
  const iterations = 10; // Number of times to run the algorithm
  let totalTime = 0;
  for (let i = 0; i < iterations; i++) {
    const arr = generateRandomArray(arrSize); // Generate random array
    const start = performance.now();
    sortFunction(arr); // Run the sorting algorithm
    const end = performance.now();
    totalTime += end - start;
  }
  return totalTime / iterations;
}

// Recommendation table
const recommendationTable = {
  10: "Insertion Sort",
  50: "Insertion Sort",
  100: "Merge Sort",
  200: "Quick Sort",
  500: "Quick Sort",
  1000: "Quick Sort",
  2000: "Merge Sort",
  5000: "Merge Sort",
  10000: "Merge Sort",
  20000: "Heap Sort",
  50000: "Heap Sort",
  100000: "Heap Sort",
};

// Get the recommendation and update the UI
function getRecommendation() {
  const arraySize = parseInt(document.getElementById("arraySizeInput").value);
  if (isNaN(arraySize)) {
    return; // Handle invalid input
  }

  const recommendations = Object.keys(recommendationTable);
  let closestSize = recommendations[0];
  for (const size of recommendations) {
    if (Math.abs(arraySize - size) < Math.abs(arraySize - closestSize)) {
      closestSize = size;
    }
  }

  const recommendedAlgorithm = recommendationTable[closestSize];
  const recommendationDisplay = document.getElementById("recommendationDisplay");
  recommendationDisplay.textContent = `Recommended Algorithm for ${arraySize} elements: ${recommendedAlgorithm}`;
}

// Call this function when the page loads or on user interaction
function setup() {
  document.getElementById("getRecommendationButton").addEventListener("click", getRecommendation);
  // Set up other event listeners and initialization here
}

// Call the setup function when the page loads
window.onload = setup;
