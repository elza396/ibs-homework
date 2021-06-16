const input = document.querySelector('.search-form__input');
input.addEventListener('input', searchItem)
let delayTimer;

function searchItem(e) {
    const searchText = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        for (let i = 0; i < cards.length; i++) {
            const itemName = cards[i].querySelector('.card_title').textContent;
            if (itemName.toLowerCase().indexOf(searchText) === -1) {
                cards[i].classList.add('card_hidden');
            } else {
                cards[i].classList.remove('card_hidden');
            }
        }
    }, 1000)
}
