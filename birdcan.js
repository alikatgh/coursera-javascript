function birdCan() {
  for (const [key, value] of Object.entries(bird)) {
    console.log(`${key}: ${value}`);
  }
}

birdCan();
