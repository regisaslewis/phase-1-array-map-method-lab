const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function firstUpperCase(title) {
  return title[0].toUpperCase() + title.substring(1);
}

function iterate() {
  let newTut = []
  let line = "";
  for (let i = 0; i < tutorials.length; i++) {
    line = tutorials[i].split(" ");
    let lineUpper = line.map(firstUpperCase);
    newTut.push(lineUpper.join(" "));
  }
  return Object.assign(tutorials, newTut);
}

const titleCased = () => {
  iterate();
  return tutorials
}
