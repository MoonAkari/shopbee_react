function BySold({ button, setButton }) {
    return (
        <a  href="#"
            className={`container__sort__by-filter__hot-sale btn-form-white-bg ${(button === 3) ? "sort__by-filter--active" : ""}`}
            onClick={() => setButton(3)}
        >
            Bán Chạy
        </a>
    )
}

export default BySold