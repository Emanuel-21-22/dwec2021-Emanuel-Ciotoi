const ageTable = document.getElementById('age-table');
console.log(ageTable);

const ageTableLabels = ageTable.querySelectorAll('label');
console.log(ageTableLabels);

const ageTableTd1 = ageTable.querySelector('td');
console.log(ageTableTd1);

let formSearch;
for (const elem of document.body.children) {
	if (elem.matches('form[name="search"]')) {
		formSearch = elem;
		console.log(formSearch);
	}
}

const fSearch = formSearch.querySelector('input');
console.log(fSearch);

const inputs = formSearch.getElementsByTagName('input');
const lSearch = inputs[inputs.length - 1];
console.log(lSearch);
