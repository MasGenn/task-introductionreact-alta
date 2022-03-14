import "./asset/css/main.css";
import "./asset/css/form.css";
import altalogo from "./asset/img/logo-ALTA-v2@2x.png";
import logoa from "./asset/img/logo-ALTA@2x.png";
import mathewimg from "./asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

export default function Home() {
  return (
    <body className="home-background">
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="alterra">
                <a href="index.html">
                  <img className="logo-atas" src={logoa} />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row align-items-center navig">
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <a href="index.html" className="aktif">
                    HOME
                  </a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                  <a href="about.html">ABOUT</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                  <a href="#">EXPERIENCE</a>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <a href="#contact">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container h-100">
        <div className="row align-items-center isi-home">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <img id="foto-profil" src={mathewimg} />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="main-p">
              <p className="sapaan">Hi, my name is</p>
              <p className="nama">Anne Sullivan</p>
              <p className="hobi">I build things for the web</p>
              <p class="tombol">
                <a href="about.html">Get In Touch</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export function Contact() {
  return (
    <body id="contact">
      <div className="container-fluid">
        <div className="row d-flex align-items-center ">
          <div className="col-md-4 form-img">
            <div className="kotak w-100 text-center">
              <img className="alta" src={altalogo} />
            </div>
          </div>
          <div className="col-md-8 isi-form">
            <div></div>
            <h3>Contact Us</h3>
            <form>
              <div className="form-group rincian-form">
                <label for="nama" className="required">
                  Full Name
                </label>
                <input type="fullname" className="form-control" id="namalengkap" placeholder="Your Full Name Here..." />
              </div>
              <div className="form-group rincian-form">
                <label for="alamatemail" className="required">
                  Email Address
                </label>
                <input type="email" className="form-control" id="emailbaru" aria-describedby="emailHelp" placeholder="example@domail.com" />
              </div>
              <div className="form-group rincian-form">
                <label for="telepon" className="required">
                  Phone Number
                </label>
                <input type="text" className="form-control" id="phonenumber" aria-describedby="nomorbaru" placeholder="08573890xxxxx" />
              </div>
              <div className="form-group rincian-form">
                <label for="kewarganegaraan">Nationality</label>
                <select className="form-control">
                  <option>Selected</option>
                </select>
                <div className="form-group">
                  <label for="message">Message:</label>
                  <textarea className="form-control" rows="5" id="message"></textarea>
                </div>
              </div>
              <input type="submit" className="tombol" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}
