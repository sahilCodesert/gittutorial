// const listArray = [[1, 2], [4, 5, [6, 7, 8]], 9, 10, [11, 12, 13], 14];

// let finalList = [];

// for (let i = 0; i < listArray.length; i++) {
//   debugger;
//   if (Array.isArray(listArray[i])) {
//     convertToSingleArray(listArray[i]);
//   } else {
//     finalList.push(listArray[i]);
//   }
// }

// function convertToSingleArray(arrayList) {
//   debugger;
//   if (Array.isArray(arrayList)) {
//     for (let i = 0; i < arrayList.length; i++) {
//       if (Array.isArray(arrayList[i])) {
//         convertToSingleArray(arrayList[i]);
//       } else {
//         finalList.push(arrayList[i]);
//       }
//     }
//   } else {
//     finalList.push(arrayList);
//   }
// }

// let b = [
//   { name: "a", age: 1 },
//   { name: "ab0", age: 51 },
//   { name: "ac", age: 21 },
//   { name: "iiiiad", age: 10 },
// ];

// for (let i = 0; i < b.length; i++) {
//   debugger;
//   if (b[i].age === 10) {
//     console.log(b[i].age);
//   }
// }
// for (let i = 0; i < b.length; i++) {
//     debugger;
//   if (b[i].age >= 21) {
//     console.log(b[i].age);
//   }
// }
// let P = [];

// for (let i = 0; i < b.length; i++) {
//     debugger;
//   if (b[i].name) {
//     P.push(b[i].name);
//   }
// }
// console.log(P);
// let U = [];

// for (let t = 0; t < b.length; t++) {
//     debugger;
//   if (b[t].name.match("i")) {
//     U.push(b[t]);
//   }
// }
// console.log(U);

// const R = 0;
// if (R) {
//   console.log(R);
// } else {
//   console.log("else", R);
// }
const a = [1, 2, 3, 10, 100, 5, 7, 8, 90];

let c = a.sort(function (n, m) {
  //   debugger;
  return n - m;
});
console.log("c", c);
let d = [...a].sort(function (n, m) {
  //   debugger;
  return m - n;
});
console.log("d", d);

let f = a.reduce((n, m) => {
  //   debugger;
  return n + m;
});
let g = a.reduce((n, m) => {
  //   debugger;
  return n / m;
});
console.log(c, "<br> ", d, "<br>", f, "<br>", g);
let j = [];
for (let i = 0; i <= a.length - 1; i++) {
  //   debugger;
  j.push(a[i]);
}
console.log(j);

let l = [];
for (let i = a.length - 1; i >= 0; i--) {
  //   debugger;
  console.log("i----->", i, a);

  l.push(a[i]);
}
console.log(l);
let k = 0;
for (let i = 0; i < a.length; i++) {
  debugger;
  console.log("i----->", i, a);
  k += a[i];
}
console.log(k);

// const a = [1, 2, 3, 10, 100, 5, 7, 8, 90];

let M = 0;
for (let i = 0; i <= a.length; i++) {
  debugger;
  console.log("i----->", i, a);
  if (a[i] > M) {
    M = a[i];
  }
}
console.log(M);
let N = 1;
for (let i = 0; i <= a.length; i++) {
  debugger;
  console.log("i----->", i, a);
  if (a[i] < N) {
    N = a[i];
  }
}
console.log(N);
