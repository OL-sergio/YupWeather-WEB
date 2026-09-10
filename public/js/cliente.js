const searchInformation = document.querySelector('.search-information');
const searchRow = document.querySelector('#search-row');
const cityInput = document.querySelector('#city');

searchInformation?.addEventListener('click', () => {
	searchRow.hidden = false;
	searchInformation.hidden = true;
	searchInformation.setAttribute('aria-expanded', 'true');
	cityInput?.focus();
});
