/**
 * Block Event Loop for a given number of milliseconds
 *
 * @param milliseconds
 */
export function emulateSlowCode (placeName, milliseconds = 500) {
  let startTime = performance.now();

  console.log(`[ARTIFICIALLY SLOW] Rendering ${placeName}`);

  while (performance.now() - startTime < milliseconds) {}
}