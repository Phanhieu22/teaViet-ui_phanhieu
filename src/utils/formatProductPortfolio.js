const formatProductPortfolio = (productPortfolio) => {
    switch (productPortfolio) {
        case 'tat-ca-san-pham': {
            return 'Tất cả sản phẩm';
        }
        case 'tra-xanh-matcha': {
            return 'trà xanh matcha';
        }
        case 'tra-xanh-sencha': {
            return 'trà xanh sencha';
        }
        case 'tra-xanh-komachi': {
            return 'trà xanh komachi';
        }
        case 'tra-xanh-houijcha': {
            return 'trà xanh houijcha';
        }
        case 'tra-xanh-genmaicha': {
            return 'trà xanh genmaicha';
        }

        default: {
            return productPortfolio;
        }
    }
};
export default formatProductPortfolio;
