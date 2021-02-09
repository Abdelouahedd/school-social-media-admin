import React, {useState} from 'react'
import Footer from '../shared/footer/Footer'
import * as Icon from 'react-feather';


export default function Main() {
    const {REACT_APP_URL} = process.env;


    const [data, setData] = useState(
        {
            numberOfProf: 0,
            numberOfStudent: 0,
            numberOfCours: 0,
            numberOfFiliere: 0,
            nbrStudentByFiliere: [],
            nbrAbsByModule: []
        }
    );


    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                    <div className="container">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><Icon.Activity size={25}/></div>
                                        Dashboard
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-n10">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 mb-4">
                            <div className="card h-100">
                                <div className="card-body h-100 d-flex flex-column justify-content-center py-5 py-xl-4">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-xxl-12">
                                            <div className="text-center px-4 mb-4 mb-xl-0 mb-xxl-4">
                                                <h1 className="text-primary">Welcome Back!</h1>
                                                <p className="text-gray-700 mb-0">It&apos;s time to get started! View
                                                    new opportunities now, or continue on your previous work.</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-xxl-12 text-center">
                                            <img className="img-fluid"
                                                 src={`${REACT_APP_URL}/assets/img/freepik/at-work-pana.svg`}
                                                 style={{maxWidth: "26rem"}}
                                                 alt="at-work img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">Nombre des professeur</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfProf}</div>
                                        </div>
                                        <i className="fas fa-chalkboard-teacher fa-3x text-white-150"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr">
                                            <div className="text-white-95 small">Nombre des etudiant</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfStudent}</div>
                                        </div>
                                        <i className="fas fa-user-graduate fa-3x  text-white-150 "></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">

                                            <div className="text-white-95 small">Nombre des cours</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfCours}</div>
                                        </div>
                                        <i className="fas fa-backpack fa-3x text-white-150"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">Nombre des Filiére</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfFiliere}</div>
                                        </div>
                                        <i className="fa fa-school fa-3x text-white-150"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 mb-4 ">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Nombre des etudiant par filiere
                                </div>
                                <div className="card-body">


                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Nombre des absences par module
                                </div>
                                <div className="card-body">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
