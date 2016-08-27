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
  convertDateObjToStringModal(date, fixMonth) {
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = fixMonth ? month + 1 : month;

    day = (day <= 9) ? `0${day}` : day;
    month = (month <= 9) ? `0${month}` : month;

    return `${day}.${month}.${year}`;
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

    return currentRoot;
  },
  cleanCurrentEventObj(eventObj, pathArr) {
    const dateArr = pathArr;
    let counter = (dateArr.length - 1);
    console.log((dateArr));
    if (Object.keys(dateArr[counter]) &&
    dateArr.length > 0) {
      // delete dateArr[counter--];
      // this.cleanCurrentEventObj(eventObj, dateArr);
      counter--;
    } else {
      console.log('end');
    }
  },
};
