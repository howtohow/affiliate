const letters = new Set(["a","b","c"]);

// List all entries
const iterator = letters.entries();
let text = "";
for (const entry of iterator) {
  console.log(entry);
}