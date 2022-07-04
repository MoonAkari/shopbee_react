import { useLayoutEffect, useState } from "react";
import ByDate from "./merchandise/buttons/ByDate";
import ByPopulation from "./merchandise/buttons/ByPopulation";
import ByPrice from "./merchandise/buttons/ByPrice";
import BySold from "./merchandise/buttons/BySold";
import Mechandise from "./merchandise/Merchandise";


function Container() {
    const productData = require('./merchandise/Products.json');
    const [product, setProduct] = useState([])
    const [button, setButton] = useState(1);

    useLayoutEffect(() => {
        function filterBySpread() {
            let array = [...productData];
            return setProduct(array.sort((a, b) => {
                return a.id - b.id;
            }, []))
        }

        function filterByDate() {
            let array = [...productData];
            return setProduct(array.sort((a, b) => {
                return Date.parse(b.dateCreate) - Date.parse(a.dateCreate)
            }, []))
        }

        function filterBySold() {
            let array = [...productData];
            return setProduct(array.sort((a, b) => {
                return b.sold - a.sold
            }, []))
        }

        function filterByPriceIncrease() {
            let array = [...productData];
            return setProduct(array.sort((a, b) => {
                return a.price - b.price
            }, []))
        }

        function filterByPriceDecrease() {
            let array = [...productData];
            return setProduct(array.sort((a, b) => {
                return b.price - a.price
            }, []))
        }

        switch (button) {
            case 1: return filterBySpread();
            case 2: return filterByDate();
            case 3: return filterBySold();
            case 4: return filterByPriceIncrease();
            case 5: return filterByPriceDecrease();
            default: alert("Undefine action, please try again!")
        }
    }, [button])

    return (
        <div className="container">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2-12">
                        <nav className="container__catology">
                            <h3 className="container__catology__header">
                                <i className="container__catology__icon fa-solid fa-list" />
                                Danh Mục
                            </h3>
                            <div className="container__catology__separate-line" />
                            <ul className="container__product-list">
                                <li className="container__product__kind container__product--active"><a href="" className="container__product__link">Tất cả sản phẩm</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách bán chạy</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách giảm giá</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách học</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách văn học</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách thiếu nhi</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách nấu ăn</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Sách kinh tế</a></li>
                                <li className="container__product__kind"><a href="" className="container__product__link">Tiểu thuyết đặc sắc không nên đọc</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="product-box grid__column-10">
                        <nav className="container__sort">
                            <div className="container__sort__by-filter">
                                <h3 className="container__sort__by-filter-title">Sắp xếp theo</h3>
                                <ByPopulation
                                    button={button}
                                    setButton={setButton}
                                />
                                <ByDate
                                    button={button}
                                    setButton={setButton}
                                />
                                <BySold
                                    button={button}
                                    setButton={setButton}
                                />
                                <ByPrice
                                    button={button}
                                    setButton={setButton}
                                />
                            </div>
                            <div className="container__sort-by__page">
                                <span className="container__sort-by__page-current ">1</span>
                                <span className="container__sort-by__page-total">/100</span>
                                <div className="container__sort-by__page__direction">
                                    <a href="" className="sort-by__page__direction__previous-page btn-form-white-bg container__sort-by__page__direction--disabled"><i className="ti-angle-left" /></a>
                                    <a href="" className="sort-by__page__direction__next-page btn-form-white-bg"><i className="ti-angle-right" /></a>
                                </div>
                            </div>
                        </nav>
                        <div className="grid__row">
                            <Mechandise
                                product={product}
                            />

                        </div>
                        <ul className="product-box_pagination pagination">
                            <li className="product-box_pagination__previous-page pagination__previous-page">
                                <a className="pagination__number__link" href=""><i className="ti-angle-left" /></a>
                            </li>
                            {/* trang hiện tại pagination__number--current */}
                            <li className="product-box_pagination__number pagination__number pagination__number--current"><a className="pagination__number__link" href="">1</a></li>
                            <li className="product-box_pagination__number pagination__number"><a className="pagination__number__link" href="">2</a></li>
                            <li className="product-box_pagination__number pagination__number"><a className="pagination__number__link" href="">3</a></li>
                            <li className="product-box_pagination__number pagination__number"><a className="pagination__number__link" href="">4</a></li>
                            <li className="product-box_pagination__number pagination__number"><a className="pagination__number__link" href="">5</a></li>
                            <li className="product-box_pagination__number pagination__number">...</li>
                            <li className="product-box_pagination__next-page pagination__next-page">
                                <a className="pagination__number__link" href=""><i className="ti-angle-right" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;
