function evenlyDistributingShirts(shirts, bags) {
  let evenlyShirtsInPerBag = Math.floor(shirts / bags);
  let remainShirts = shirts % bags;

  let distributionSet = [];

  for (let i = 0; i < bags; i++) {
    if (remainShirts-- > 0) {
      let y = evenlyShirtsInPerBag + 1;
      distributionSet.push(y);
    } else {
      distributionSet.push(evenlyShirtsInPerBag);
    }
  }

  return distributionSet;
}

console.log(evenlyDistributingShirts(21, 5));
console.log(evenlyDistributingShirts(50, 10));
console.log(evenlyDistributingShirts(100, 10));
console.log(evenlyDistributingShirts(102, 10));
