const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirde', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(keyword, limit, callback) {
  const filteredNames = names.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
  const results = filteredNames.slice(0, limit);
  callback(results);
}

function displayNames(names) {
  console.log(names);
}

// example usage
searchName('al', 4, displayNames); 
