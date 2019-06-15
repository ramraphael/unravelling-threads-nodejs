function fibInRange(range) {
  let a = 1,
    b = 0,
    temp;

  while (range >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    range--;
  }

  console.log(b);
}

process.on("message", data => {
  if (data === "start") {
    fibInRange(1000000000);
  }
});

module.exports = fibInRange;
