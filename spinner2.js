const spin = () => {
  let lines = "|/-\\|/-\\|\n";
  let delay = 0;
  for (const char of lines) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, delay);
  }
};

spin();