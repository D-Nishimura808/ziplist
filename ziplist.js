const numList = [1, 2, 3];
const abcList = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const combinedList = [];

  for (let i = 0; i < list1.length; i++) {
    combinedList.push(list1[i]);
    combinedList.push(list2[i]);
  }

  return combinedList;
}

console.log(zipList(abcList, numList));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(abcList, numList));
