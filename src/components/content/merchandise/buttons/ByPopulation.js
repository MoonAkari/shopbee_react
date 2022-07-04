function ByPopulation({ button, setButton }) {

    return (
        <a  href="#"
            className={`container__sort__by-filter__popularity btn-form-white-bg ${(button === 1) ? "sort__by-filter--active" : ""}`}
            onClick={() => setButton(1)}
        >
            Phổ Biến
        </a>
    )
}

export default ByPopulation