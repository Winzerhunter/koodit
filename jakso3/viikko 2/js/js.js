let a = [];
for (i=0; i<200; i++){
  a[i] = Math.floor(Math.random() * 200 + 1);
}
let b = new Set();
let pickn = (a, amount) => {
  if(amount === 1){
    b.add(a[Math.floor(Math.random() * 200)]);
    return b
  }
  else {
    b.add(a[Math.floor(Math.random() * 200)]);
    return b, pickn(a, amount-1);
  }
};
console.log(pickn(a, 7));