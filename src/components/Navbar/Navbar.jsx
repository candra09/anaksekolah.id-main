import React, { useState } from 'react';
import logo from "../Footer/assets/logo.png";
import "./style.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='/'>
          <img src={logo} className="py-2" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} center>
          <MDBNavbarNav className='mr-auto mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink className='text' href='/SD'>
                Kelas
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Ekskul</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Promo</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Event</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Testimoni</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn outline onClick={toggleShow}>Sign&nbsp;in</MDBBtn>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
              <MDBModalContent className='bg-info'>
                <MDBModalHeader>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <img src={logo} />
                  <h3>Login</h3>
                  <form action="">
                    <input type="text" name="" placeholder='email/username' />
                    <input type="password" name="" placeholder='password' />
                    <h6>Belum mempunyai akun? <a href="/register">Daftar akun</a> atau
                      <a href="#">Lupa Password?</a>
                    </h6>
                    <button className='btn btn-primary'>Login</button>
                    <button className='btn btn-danger'>Login dengan Google</button>
                  </form>
                </MDBModalBody>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>

          <MDBBtn tag='a' href='/register' className='mx-2'>Sign&nbsp;up</MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  );
}
