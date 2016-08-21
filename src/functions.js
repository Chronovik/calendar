export default {
  createPathFromDateObject(dateString, storeObj) {
    const path = dateString;
    const obj = storeObj;
    const explodePath = path.split('_');
    let currentRoot = obj;

    for (let i = 0; explodePath.length > i; i++) {
      if (typeof currentRoot[explodePath[i]] === 'undefined') {
        currentRoot[explodePath[i]] = {};
      }
      currentRoot = currentRoot[explodePath[i]];
    }
    return obj;
  },
  convertDateObjToString(date) {
    return `y${date.getFullYear()}_m${date.getMonth()}_d${date.getDate()}`;
  },
  findEventByDateString(dateString, eventsObj) {
    const events = eventsObj;
    const path = dateString;
    const explodePath = path.split('_');
    let currentRoot = events;

    for (let i = 0; explodePath.length > i; i++) {
      if (typeof currentRoot[explodePath[i]] === 'undefined') {
        return false;
      }
      currentRoot = currentRoot[explodePath[i]];
    }
    console.log(currentRoot);

    return currentRoot;
  },
};
