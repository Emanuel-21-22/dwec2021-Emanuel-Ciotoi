'use strict';
/**
 * Clears all remaining anagram and returns a single word from among the others
 * @param {Array} anagramWords Matrix containing anagrams
 * @returns Matrix that contains the first word as anagram from `anagramWords`
 */
export default function aclean(anagramWords) {
	const anagrams = [];

	const sorted = anagramWords.map((word) =>
		word.toLowerCase().split('').sort().join('')
	);
	const setArr = new Set(sorted);
	const reduction = groupArr(setArr, sorted);

	for (const key in reduction) {
		anagrams.push(reduction[key].map((word) => anagramWords[word])[0]);
	}

	return anagrams;
}

/**
 * This function search identical letters at `uniqueWords`
 * @param {Set} uniqueWords
 * @param {Array} sortedArr
 * @returns An object with the array indexes of each anagram
 */
const groupArr = (uniqueWords, sortedArr) => {
	let group = {};

	for (let word of uniqueWords) {
		let wordArr = sortedArr.reduce((count, cur, index) => {
			if (word === cur) {
				count.push(index);
			}

			return count;
		}, []);

		group[word] = wordArr;
	}

	return group;
};
