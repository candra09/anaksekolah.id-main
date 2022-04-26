import React from "react";
import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <div>
      <section class="py-20 2xl:py-40 rounded-end">
        <div className="jumbotron bg-dblue">
          <div className="container d-flex flex-nowrap text-white">
            <div className="col-3 p-5">
              <img src={logo} alt="logo" className="mt-5" />
              <h4 className="fs-4 fw-bolder">AnakSekolah.ID</h4>
              <p className="w-100 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
                possimus repellendus dolore explicabo voluptatum sit minus
                molestiae!
              </p>
              <a
                href="#"
                className="btn btn-light btn-lg text-black fs-2 w-100 my-2 text-lg-start"
              >
                <i class="fa fa-google"></i>
              </a>
              <a
                href="#"
                className="btn btn-light btn-lg text-black fs-2 w-100 my-2 text-lg-start"
              >
                <i class="fa fa-apple"></i>
              </a>
            </div>
            <div className="col-3 p-5">
              <div class="d-flex flex-column my-5 py-1">
                <h5 className="fw-bolder">Kelas AnakSekolah.ID</h5>
                <a href="" className="text-white">
                  <h6 className="py-3 fw-bolder">Kelas</h6>
                </a>
                <a href="" className="text-white">
                  <h6 className="py-3 fw-bolder">Ekskul</h6>
                </a>
                <a href="" className="text-white">
                  <h6 className="py-3 fw-bolder">Promo</h6>
                </a>
                <a href="" className="text-white">
                  <h6 className="py-3 fw-bolder">Event</h6>
                </a>
                <a href="" className="text-white">
                  <h6 className="py-3 fw-bolder">Testimoni</h6>
                </a>
              </div>
            </div>
            <div className="col-3  p-5">
              <div class="d-print-flex my-5 py-1">
                <h5 className="fw-bolder">Event AnakSekolah.ID</h5>
              </div>
            </div>
            <div className="col-3 p-5">
              <div className="my-5 py-1">
                <h5 className="fw-bolder">Hubungi Kami</h5>
                <div>
                  <a
                    href="#"
                    className="btn btn-light btn-lg text-black w-100 my-2 text-lg-start"
                  >
                    <i class="fa fa-whatsapp"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-light btn-lg text-black w-100 my-2 text-lg-start"
                  >
                    <i class="fa fa-phone"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-light btn-lg text-black w-100 my-2 text-lg-start"
                  >
                    <i class="fa fa-envelope"></i>
                  </a>
                </div>
                <h5 className="fw-bolder mt-5">Ikuti Kami</h5>
                <div className="">
                  <a
                    href=""
                    className="btn btn-light btn-lg text-black my-2 me-2 text-lg-start"
                  >
                    <i class="fa fa-facebook-square"></i>
                  </a>
                  <a
                    href=""
                    className="btn btn-light btn-lg text-black m-2 text-lg-start"
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href=""
                    className="btn btn-light btn-lg text-black m-2 text-lg-start"
                  >
                    <i class="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
