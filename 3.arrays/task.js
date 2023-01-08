 const compareArrays = (arr1, arr2) => arr1.every((el, i) => el === arr2[i]) && arr1.length === arr2.length;


function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length -1) {
    return acc / arr.length;
    }
    return acc;
  }, 0)
  return result;
}
