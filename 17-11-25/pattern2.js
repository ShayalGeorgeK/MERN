let n = 5;
let pattern = "";

// Upper Half
for (let i = 1; i <= n; i++) {

  // Add left spaces
  for (let s = 1; s <= n - i; s++) {
    pattern += " ";
  }

  // First row → print only 1
  if (i === 1) {
    pattern += "*\n";
  } else {
    pattern += "*";

    // Inside spaces
    for (let space = 1; space <= (2 * i - 3); space++) {
      pattern += " ";
    }

    pattern += "*\n";
  }
}

// Lower Half
for (let i = n - 1; i >= 1; i--) {

  // Left spaces
  for (let s = 1; s <= n - i; s++) {
    pattern += " ";
  }

  if (i === 1) {
    pattern += "*\n";
  } else {
    pattern += "*";

    // Inside spaces
    for (let space = 1; space <= (2 * i - 3); space++) {
      pattern += " ";
    }

    pattern += "*\n";
  }
}

console.log(pattern);
