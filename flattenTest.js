const dict1 = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        };
const flatten = dict => {
  const obj = {};
  helper('', dict, obj);
  return obj;
};

const helper = (initialKey, dict, object) => {
  for (let key in dict) {
    if (typeof dict[key] !== 'object') {
      if (initialKey === '' || initialKey === null) {
        object[key] = dict[key];
      } else if (key === '') {
        object[initialKey] = dict[key];
      } else {
        object[initialKey + '.' + key] = dict[key];
      }
    } else {
      if (initialKey === '' || initialKey === null) {
        helper(key, dict[key], object);
      } else {
        helper(initialKey + '.' + key, dict[key], object);
      }
    }
  }
};

flatten(dict1);
