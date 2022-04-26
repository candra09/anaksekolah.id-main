import React from 'react';
import Icon from '../../assets/img/register.png';

export default function Register() {
    return (
        <div className="jumbotron bg-blue">
            <div className="container d-flex">
                <div className="col-md-6 sm-12">
                    <h3 className='display-4 pt-5 pb-3 text-white'>Daftar Akun</h3>
                    <div className="form-group">
                        <input type="text" className="form-control mb-3" placeholder="Nama Lengkap" />
                        <input type="email" className="form-control mb-3" placeholder="Email" />
                        <input type="text" className="form-control mb-3" placeholder="No Telepon" />
                        <input type="password" className="form-control mb-3" placeholder="Password" />
                        <input type="password" className="form-control mb-3" placeholder="Confirm Password" />
                        <select className="form-control mb-3">
                            <option>Status</option>
                            <option value="1">Guru</option>
                            <option value="2">Murid</option>
                        </select>
                        <select className="form-control mb-3">
                            <option>Tingkat Pendidikan</option>
                            <option value="1">SD</option>
                            <option value="2">SMP</option>
                            <option value="3">SMA</option>
                            <option value="4">SMK</option>
                        </select>
                        <select className="form-control mb-3">
                            <option>Kelas</option>
                            <option value="1">Kelas 1</option>
                            <option value="2">Kelas 2</option>
                            <option value="3">Kelas 3</option>
                            <option value="4">Kelas 4</option>
                            <option value="5">Kelas 5</option>
                            <option value="6">Kelas 6</option>
                        </select>
                    </div>
                    <button className='btn btn-md bg-primary w-100 p-2'>Daftar</button>
                </div>
                <div className="col-md-6 sm-12">
                    <img src={Icon} className="w-100" />
                </div>
            </div>
        </div>
    )
}
