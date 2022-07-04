function Modal({ setModal, modal, register, handleRegister }) {

  const handleCloseModal = (e) => {
    setModal(false);
    e.stopPropagation()
  }

  return (
    <div className={`modal ${modal ? "open__block" : ""}`}>
      <div className={`modal__overlay`} onClick={e => handleCloseModal(e)}  >
      </div>
      {/* Modal Login */}
      <form action>
        <div className="modal__verify__sigin__login">
          <div className={`modal__verify ${register ? "open__block" : ""}`}>
            <header className="verify__header">Đăng nhập</header>
            <div className="verify__box">
              <input type="text" className="verify__id input-form" placeholder="Email/Số điện thoại/Tên đăng nhập" />
              <span className="verify__id__notify" />
              <input type="password" className="verify__pwd input-form" placeholder="Mật khẩu" />
              <span className="verify__pwd__notify" />
              <button type="button" className="verify__submit-btn btn-form grid__full-width">ĐĂNG NHẬP</button>
            </div>
            <div className="verify__subbox-1">
              <a href="" className="verify__forget-pwd">Quên mật khẩu</a>
              <a href="" className="verify__by-SMS">Đăng Nhập với SMS</a>
            </div>
            <div className="verify__subbox-2">
              <div className="verify__subbox-2__line" />
              <div className="verify__subbox-2__text"><p>HOẶC</p></div>
              <div className="verify__subbox-2__line" />
            </div>
            <div className="verify__subbox-3">
              <div className="verify__subbox-3__brand"><a href=""><i className="verify__icon fa-brands fa-facebook" />Facebook</a></div>
              <div className="verify__subbox-3__brand"><a href=""><i className="verify__icon fa-brands fa-google" />Google</a></div>
              <div className="verify__subbox-3__brand"><a href=""><i className="verify__icon fa-brands fa-apple" />Apple</a></div>
            </div>
            <footer className="verify__footer">
              <p>Bạn mới biết đến Shopbee? <span className="verify__footer-sigin" onClick={() => handleRegister(false)} >Đăng ký</span></p>
            </footer>
          </div>
          {/* Modal Signin */}
          <form action>
            <div className={`modal__signin ${register ? "" : "open__block"}`}>
              <header className="signin__header">Đăng ký</header>
              <div className="signin__box">
                <input type="text" className="signin__id input-form" placeholder="Email/Số điện thoại/Tên đăng nhập" />
                <span className="signin__id__notify" />
                <input type="password" className="signin__pwd input-form" placeholder="Mật khẩu" />
                <span className="signin__pwd__notify" />
                <input type="password" className="verify__signin__pwd input-form" placeholder="Nhập lại Mật khẩu" />
                <span className="verify__signin__pwd__notify" />
                <button type="button" className="signin__submit-btn btn-form grid__full-width">ĐĂNG KÝ</button>
              </div>
              <div className="signin__subbox-2">
                <div className="signin__subbox-2__line" />
                <div className="signin__subbox-2__text"><p>HOẶC</p></div>
                <div className="signin__subbox-2__line" />
              </div>
              <div className="signin__subbox-3">
                <div className="signin__subbox-3__brand"><a href=""><i className="signin__icon fa-brands fa-facebook" />Facebook</a></div>
                <div className="signin__subbox-3__brand"><a href=""><i className="signin__icon fa-brands fa-google" />Google</a></div>
              </div>
              <div className="signin__subbox__term">
                <p className="term">
                  Bằng việc đăng kí, bạn đã đồng ý với Shobee về
                  <a href=""> Điều khoản và dịch vụ </a> &amp;
                  <a href=""> Chính sách bảo mật</a>
                </p>
              </div>
              <footer className="signin__footer">
                <p>Bạn đã có tài khoản? <span className="signin__footer-login" onClick={() => handleRegister(true)} >Đăng nhập</span></p>
              </footer>
            </div>
          </form>
        </div></form>
    </div>
  )
}

export default Modal;
