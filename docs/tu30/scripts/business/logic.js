export function createInput(list) {
	const regex = /(\d){1,}$/;
	const lastElName = list.lastElementChild.getAttribute('name');
	const nextNum = regex.test(lastElName) ? ++lastElName.match(regex)[0] : 1;

	const input = document.createElement('input');

	input.type = 'text';
	input.id = `user${nextNum}`;
	input.name = `user${nextNum}`;
	input.placeholder = 'username';

	return input;
}

/**
 *
 * @param {HTMLCollectionOf<HTMLInputElement>} listInputs
 * @returns
 */
export async function retrieveData(listInputs) {
	const listNames = [];

	for (const input of listInputs) {
		const name = (await getName(input.value)) ?? '';
		listNames.push(name);
	}

	return listNames;
}

/**
 *
 * @param {String} user GitHub username
 * @returns
 */
async function getName(user) {
	return await getData(user)
		.then((json) => json.name)
		.catch((err) => '');
}

/**
 *
 * @param {String} user GitHub username
 * @returns
 */
async function getData(user) {
	const link = makeLink(user);

	const response = await fetch(link.url, link.otp);
	if (response.ok) {
		return response.json();
	}
}

/**
 * @param {String} user GitHub username
 * @returns
 * Object with 2 props
 * * `url`: contains the user's github url
 * * `otp`: contains optional request options
 */
function makeLink(user) {
	const options = {
		method: 'GET',
		headers: { Accept: 'application/vnd.github.v3+json' },
	};

	return { url: `https://api.github.com/users/${user}`, otp: options };
}
