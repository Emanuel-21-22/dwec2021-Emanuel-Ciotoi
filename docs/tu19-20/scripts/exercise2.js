for (const link of document.querySelectorAll('a')) {
	const href = link.getAttribute('href');

	if (href == undefined) continue;

	if (href.includes('://') && !href.startsWith('http://internal.com')) {
		link.style.color = 'orange';
	}
}
