import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {FaLayerGroup} from 'react-icons/all'
import {APP_HOME_RESUME_URL, APP_ERROR_404_URL} from '../../../url/AppUrl'
import CenterLayout from '../../../layout/content/center/CenterLayout'

const Resume = () => {
    return (
        <CenterLayout icon={FaLayerGroup} title={"Resume"}>
            <div className="table-responsive">
                <table className="table table-bordered align-middle">
                    <tbody>
                        <tr>
                            <td rowSpan="4" className="px-2 py-1 text-center fw-bolder">Professional experience</td>
                            <td className="px-2 py-1 text-nowrap">Jun 2015 - Jan 2019</td>
                            <td className="px-2 py-1 ">Department of Informatization at UCLV<sup className="fw-bolder">(1)</sup></td>
                            <td className="px-2 py-1 text-nowrap">Santa Clara, Cuba</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-2 py-1">
                                <p className="m-0 p-0 fw-bolder">Python/Django Developer.</p>
                                <div className="m-0 ms-3 p-0">
                                    <p className="m-0 p-0">- Used Docker, Python, Django, Bootstrap and jQuery to design server applications and client interfaces.</p>
                                    <p className="m-0 p-0">- Developed and deployed applications on Linux platforms.</p>
                                    <p className="m-0 p-0">- Managed continuous maintenance and troubleshooting of Python/Django projects.</p>
                                    <p className="m-0 p-0">- Collaborated with other developers to handle complicated issues related with the deployment of Python/Django based applications.</p>
                                    <p className="m-0 p-0">- Designed and configured databases of web applications.</p>
                                    <p className="m-0 p-0">- Handled the development and management of user interfaces with HTML, CSS and JavaScript.</p>
                                    <div className="m-0 mt-3 p-0">
                                        <p className="m-0 p-0 fw-bolder">Products:</p>
                                        <div className="m-0 ms-3 p-0">
                                            <p className="m-0 p-0">- Web application for the management and general use of the University’s high performance computer cluster.</p>
                                            <div className="m-0 ms-4 p-0">
                                                <span className="m-0 p-0 fw-bolder">URL:</span> <a href="https://portal.uclv.hpc.cu" rel="noreferrer" target="_blank">https://portal.uclv.hpc.cu</a>
                                            </div>
                                            <p className="m-0 p-0">- Web application for the management and evaluation of the scientific, technological and innovative work of the University’s staff.</p>
                                            <div className="m-0 ms-4 p-0">
                                                <span className="m-0 p-0 fw-bolder">URL:</span> <a href="https://cti.uclv.edu.cu" rel="noreferrer" target="_blank">https://cti.uclv.edu.cu</a>
                                            </div>
                                            <p className="m-0 p-0">- Web application for the management of the payment of the stipend to the students of the University.</p>
                                            <div className="m-0 ms-4 p-0">
                                                <span className="m-0 p-0 fw-bolder">URL:</span> <a href="https://estipendio.uclv.edu.cu" rel="noreferrer" target="_blank">https://estipendio.uclv.edu.cu (It is only accessible from within the institution)</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-0 mt-3 p-0">
                                        <p className="m-0 p-0 fw-bolder">Collaboration:</p>
                                        <div className="m-0 ms-3 p-0">
                                            <p className="m-0 p-0">- I worked at the computer cluster of the University of Ghent in Belgium, as part of a collaboration project between Belgian and Cuban universities (VLIR).</p>
                                            <div className="m-0 ms-4 p-0">
                                                <span className="m-0 p-0 fw-bolder">URL:</span> <a href="https://github.com/hpcugent/vsc-accountpage" rel="noreferrer" target="_blank">https://github.com/hpcugent/vsc-accountpage (It is a private project)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 text-nowrap">Sep 2013 - Jun 2015</td>
                            <td className="px-2 py-1">Provincial Prosecutor’s Office of Villa Clara</td>
                            <td className="px-2 py-1 text-nowrap">Santa Clara, Cuba</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-2 py-1">
                                <p className="m-0 p-0 fw-bolder">IT Network Administrator.</p>
                                <div className="m-0 ms-3 p-0">
                                    <p className="m-0 p-0">- Managed all network services.</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="2" className="px-2 py-1 text-center fw-bolder">Education</td>
                            <td className="px-2 py-1 text-nowrap">Sep 2008 - Jun 2013</td>
                            <td className="px-2 py-1">UCLV<sup className="fw-bolder">(1)</sup></td>
                            <td className="px-2 py-1 text-nowrap">Santa Clara, Cuba</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-2 py-1">
                                <p className="m-0 p-0 fw-bolder">BSc in Software Engineering.</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 text-center fw-bolder">Key skills</td>
                            <td colSpan="3" className="px-2 py-1">
                                <table className="table table-borderless m-0 p-0">
                                    <tbody>
                                        <tr>
                                            <td className="p-0">- Knowledge of developing Oriented Object Programming.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Advanced)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- REST APIs.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Medium)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- Python, Java.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Medium, Medium)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- Django, Django REST Framework, Spring Boot.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Advanced, Medium, Medium)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- HTML5, XHTML, XML, CSS3, JavaScript ES6, JSON.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Medium)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- React, Bootstrap5, jQuery.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Advanced, Advanced, Basic)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- Knowledge of managing database using Postgres, MySQL.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Basic)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- Windows and Linux (servers and workstations).</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Medium)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- Capabilities to use Docker, Vagrant, Selenium, Celery, Code SQL outside ORM and Git.</td>
                                            <td className="p-0 fw-bolder text-nowrap">(Medium)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1 text-center fw-bolder"><strong>Languages</strong></td>
                            <td colSpan="3" className="px-2 py-1">
                                <table className="table table-borderless m-0 p-0">
                                    <tbody>
                                        <tr>
                                            <td className="p-0">- English: <span className="m-0 p-0 fw-bolder text-nowrap">(Basic)</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-0">- Spanish: <span className="m-0 p-0 fw-bolder text-nowrap">(Native)</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="px-2 py-1"><span className="fw-bolder">(1)</span> UCLV, Universidad Central "Marta Abreu" de Las Villas, Cuba (Central University "Marta Abreu" of Las Villas, Cuba).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CenterLayout>
    )
}

const ResumeView = () => {
    return (
        <Switch>
            <Route path={APP_HOME_RESUME_URL} children={<Resume/>} exact={true}/>
            <Route path={"*"} children={<Redirect from={APP_HOME_RESUME_URL} to={APP_ERROR_404_URL}/>}/>
        </Switch>
    )
}

export default ResumeView
