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

function flatten(dict) {
  const flatDictionary = {};
  helper('', dict, flatDictionary);
  return flatDictionary;
}

function helper(initialKey, dict, flatDictionary) {
  for (let key in dict) {
    if (typeof dict[key] !== 'object') {
      if (initialKey === null || initialKey === '') {
        flatDictionary[key] = dict[key];
      } else {
        flatDictionary[initialKey + '.' + key] = dict[key];
      }
    } else {
      if (initialKey === null || initialKey === '') {
        helper(key, dict[key], flatDictionary);
      } else {
        helper(initialKey + '.' + key, dict[key], flatDictionary);
      }
    }
  }
}

flatten(dict1);
