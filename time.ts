export function time(cb: () => void) {
  let t1: [number, number], t2: [number, number];
  t1 = process.hrtime();
  cb();
  t2 = process.hrtime(t1);
  console.log('Time in milliseconds is: ', t2[0] * 1000 + t2[1] / 1000000);
}
