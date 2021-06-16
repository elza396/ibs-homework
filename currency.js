function getAliasCurrency(currency) {
    switch (currency) {
        case 'EUR':
            return '€';
        case 'USD':
            return '$';
        case 'RUB':
            return '₽';
        default:
            return '';
    }
}
