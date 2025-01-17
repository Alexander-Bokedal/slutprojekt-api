
function calculateLocalStorageSize() {
  let total = 0;

  // Iterate over all keys in localStorage
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += ((localStorage[key].length + key.length) * 2); // 2 bytes per character
    }
  }

  console.log(`Total size in localStorage: ${total} bytes`);
  console.log(`Approx. size in kilobytes: ${(total / 1024).toFixed(2)} KB`);
}

calculateLocalStorageSize();
