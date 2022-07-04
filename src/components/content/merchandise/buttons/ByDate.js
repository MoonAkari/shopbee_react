function ByDate({ button, setButton }) {

    return (
        <a  href="#"
            className={`container__sort__by-filter__recently btn-form-white-bg ${(button === 2) ? "sort__by-filter--active" : ""}`}
            onClick={() => setButton(2)}
        >
            Mới Nhất
        </a>
    )
}

export default ByDate