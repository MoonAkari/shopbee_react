function ByPrice({ button, setButton }) {

    return (
        <div className="container__sort__by-filter__price-list option-list btn-form-white-bg">
            <span className="sort__by-filter__price__default option-list__defaul-value">
                {(button == 4) ? "Giá: Thấp đến Cao" : (button == 5) ? "Giá: Cao đến Thấp" : "Giá"}
            </span>
            <i className="list-item ti-angle-down" />
            <div className="sort__by-filter__price__kind option-list__option-value">
                <a  href="#"
                    className="sort__by-filter__price__kind__price-up"
                    onClick={() => setButton(4)}
                >
                    Giá: Thấp đến Cao
                </a>
                <a  href="#"
                    className="sort__by-filter__price__kind__price-down"
                    onClick={() => setButton(5)}
                >
                    Giá: Cao đến Thấp
                </a>
            </div>
        </div>
    )
}

export default ByPrice