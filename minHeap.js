var roads = {};

function makeRoad(from, to, length) {
  function addRoad(from, to) {
    if (!(from in roads))
      roads[from] = [];
    roads[from].push({to: to, distance: length});
  }
  addRoad(from, to);
  addRoad(to, from);
}

function makeRoads(start) {
  for (let i = 1; i < arguments.length; i += 2)
    makeRoad(start, arguments[i], arguments[i + 1]);
}

function roadsFrom(place) {
  let found = roads[place];
  if (!found) {
    throw new Error('no place named' + place + 'found');
  } else {
    return found;
  }
}

makeRoads("Point Kiukiu", "Hanaiapa", 19,
          "Mt Feani", 15, "Taaoa", 15);
makeRoads("Airport", "Hanaiapa", 6, "Mt Feani", 5,
          "Atuona", 4, "Mt Ootua", 11);
makeRoads("Mt Temetiu", "Mt Feani", 8, "Taaoa", 4);
makeRoads("Atuona", "Taaoa", 3, "Hanakee pearl lodge", 1);
makeRoads("Cemetery", "Hanakee pearl lodge", 6, "Mt Ootua", 5);
makeRoads("Hanapaoa", "Mt Ootua", 3);
makeRoads("Puamua", "Mt Ootua", 13, "Point Teohotepapapa", 14);

function show(thing) {
  console.log(thing);
}

// show(roadsFrom('Hanaiapa'));

function gamblerPath(from, to) {
  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function randomDirection(from) {
    let options = roadsFrom(from);
    return options[randomNumber(options.length)].to;
  }

  let path = [];
  while (true) {
    path.push(from);
    if (from === to) {
      break;
    }
    from = randomDirection(from);
  }
  return path;
}
show(gamblerPath('Hanaiapa', 'Mt Feani'));
// show(roads);
