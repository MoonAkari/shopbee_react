function Footer () {
    return (
        <footer className="footer">
        <div className="footer__upper grid">
          <div className="grid__row">
            <div className="grid__column-2-10">
              <h4 className="footer__title">chăm sóc khách hàng</h4>
              <ul className="footer__list">
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Trung Tâm Trợ Giúp</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Shopee Blog</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Shopee Mall</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Hướng Dẫn Mua Hàng</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Hướng Dẫn Bán Hàng</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Thanh Toán</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Shopee Xu</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Vận Chuyển</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Trả Hàng &amp; Hoàn Tiền</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Chăm Sóc Khách Hàng</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Chính Sách Bảo Hành</a></li>
              </ul>
            </div>
            <div className="grid__column-2-10">
              <h4 className="footer__title">VỀ SHOPEE</h4>
              <ul className="footer__list">
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Giới Thiệu Về Shopee Việt Nam</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Tuyển Dụng</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Điều Khoản Shopee</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Chính Sách Bảo Mật</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Chính Hãng</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Kênh Người Bán</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Flash Sales</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Chương Trình Tiếp Thị Liên Kết Shopee</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link">Liên Hệ Với Truyền Thông</a></li>
              </ul>
            </div>
            <div className="grid__column-2-10">
              <h4 className="footer__title">thanh toán</h4>
              <ul className="footer__logo-list">
                <li style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png")'}} className="footer__logo" />
                <li style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1158px-Mastercard-logo.svg.png")'}} className="footer__logo" />
                <li style={{backgroundImage: 'url("https://seeklogo.com/images/S/shopee-pay-logo-2217CDC100-seeklogo.com.png")'}} className="footer__logo" />
                <li style={{backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/993px-JCB_logo.svg.png")'}} className="footer__logo" />
              </ul>
            </div>
            <div className="grid__column-2-10">
              <h4 className="footer__title">THEO DÕI CHÚNG TÔI TRÊN </h4>
              <ul className="footer__list">
                <li className="footer__list__item"><a href="" className="footer__list__item__link"><i className="footer__list__item-icon fa-brands fa-facebook" />Facebook</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link"><i className="footer__list__item-icon fa-brands fa-instagram" />Instagram</a></li>
                <li className="footer__list__item"><a href="" className="footer__list__item__link"><i className="footer__list__item-icon fa-brands fa-linkedin" />LinkedIn</a></li>
              </ul>
            </div>
            <div className="grid__column-2-10">
              <h4 className="footer__title">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h4>
              <div className="footer__download">
                <img className="footer__qr" src="../assets/img/qr-code.png" alt="" />
                <div className="footer__apps">
                  <a href="https://play.google.com/store/apps/details?id=com.shopee.vn&referrer=af_tranid%3Drsx9V4J79OX3NH5LwyqLcw%26pid%3DOrganicA%26c%3Dlp_home_and1" className="footer__apps-link"><img className="apps-link__gg-play" src="../assets/img/gg-play.png" alt="gg play" /></a>
                  <a href="https://apps.apple.com/vn/app/id959841449" className="footer__apps-link"><img className="apps-link__app-store" src="../assets/img/app-store.png" alt="app store" /></a>
                  <a href="https://appgallery.huawei.com/app/C101433653?sharePrepath=ag&channelId=web&detailType=0" className="footer__apps-link"><img src="../assets/img/app-gallery.png" alt="app gallery" className="apps-link__gallery" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid__row">
            <p className="footer__copyright">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
          </div>
        </div>
      </footer>

    )
}

export default Footer;
