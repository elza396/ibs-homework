var input = document.querySelector('.search-form__input');
input.addEventListener('input', searchItem);

function searchItem(e) {
    var searchText = e.target.value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    var delayTimer;
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function() {
        for (var i = 0; i < cards.length; i++) {
            var itemName = cards[i].querySelector('.card_title').textContent;
            if (itemName.toLowerCase().indexOf(searchText) === -1) {
                cards[i].classList.add('card_hidden');
            } else {
                cards[i].classList.remove('card_hidden');
            }
        }
    }, 1000)
}
