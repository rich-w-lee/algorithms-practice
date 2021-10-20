export function time(cb: () => void) {
  let t1: [number, number], t2: [number, number];
  t1 = process.hrtime();
  t2 = process.hrtime(t1);
  cb();
  console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
}
