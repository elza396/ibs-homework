var input = document.querySelector('.search-form__input');
input.addEventListener('input', searchItem);
function searchItem(e) {
    var searchText = e.target.value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
        var itemName = cards[i].querySelector('.card_title').textContent;
        if (itemName.toLowerCase().indexOf(searchText) !== -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
