//Sex position generator

//Lists of random adjectives, animals and verbs.

const adjectives =
  'aggressive courageous crabby creepy dangerous tasty teeny tender tense terrible';
const animals =
  'butterfly buzzard camel caribou carp cat cow tiger zebra monkey';
const verbs = 'clap hug dive punch jump slam kiss walk run crawl';

//Empty arrays that will contain each part of message
const adjArr = adjectives.split(' ');
const nounArr = animals.split(' ');
const verbArr = verbs.split(' ');
//Function to generate random sex postion.
const generateMessage = (adj, noun, verb) => {
  const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
  return `The ${adj[randomIndex(adj)]} ${noun[randomIndex(noun)]} ${
    verb[randomIndex(verb)]
  }.`;
};

console.log(generateMessage(adjArr, nounArr, verbArr));
