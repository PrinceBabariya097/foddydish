import logo from '/images/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid  bg-dark text-white mt-5 py-2">
          <div className="footer">
            <div className="row mt-5">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <div className="logo">
                  <img src={logo} alt="" />
                    </div>
                <div className="socials">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <h5>Links</h5>
                <ul>
                  <li>Home</li>
                  <li>Pricing</li>
                  <li>Download</li>
                  <li>Service</li>
                  <li>About</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <h5>Support</h5>
                <ul>
                  <li>FAQ</li>
                  <li>How it</li>
                  <li>Features</li>
                  <li>Contact</li>
                  <li>Reporting</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
                <h5>Contact Us</h5>
                <ul>
                  <li>+91 8569362514</li>
                  <li>prince.babariya.786@gmail.com</li>
                  <li>Science-city</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer