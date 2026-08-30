// Mini Project — ID Generator

function* idGenerator() {
  let id = 1;
  while(true){
    yield id ++;
  }
}

const gen = idGenerator();
console.log(`Task-${String(gen.next().value).padStart(3, '0')}`);
console.log(`Task-${String(gen.next().value).padStart(3, '0')}`);
console.log(`Task-${String(gen.next().value).padStart(3, '0')}`);
console.log(`Task-${String(gen.next().value).padStart(3, '0')}`);
console.log(`Task-${String(gen.next().value).padStart(3, '0')}`);
