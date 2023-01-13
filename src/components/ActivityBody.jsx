import React from 'react'
import '../styles/activityBody.css'

export default function ActivityBody() {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="userName fs-2 fw-bold">Steven Smith</div>
            <div className="activityBody container-fluid text-center mt-5 bg-warning">
                <button type="button" className="btn btn-outline-primary">Create new Activity</button>
                <div className="activityForm mt-4" style={{ maxWidth: "45%", margin: "auto" }}>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Running
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                {/*  */}
                                <div className="accordion-body d-flex justify-content-center">
                                    <div className="card text-start" style={{ width: "26rem" }}>
                                        <div className="card-body">
                                            <div className="card-title d-flex"><span className="fw-bold me-2">Description:</span><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "15%" }}>Date:</span><p className="card-text">2-4-2022 13:45:23 GMT</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "6%" }}>Duration:</span><p className="card-text">13:45:23</p></div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                        </div>
                        {/*  */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Bicyle Riding
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <div className="card text-start" style={{ width: "26rem" }}>
                                        <div className="card-body">
                                            <div className="card-title d-flex"><span className="fw-bold me-2">Description:</span><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "15%" }}>Date:</span><p className="card-text">2-4-2022 13:45:23 GMT</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "6%" }}>Duration:</span><p className="card-text">13:45:23</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Walking
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <div className="card text-start" style={{ width: "26rem" }}>
                                        <div className="card-body">
                                            <div className="card-title d-flex"><span className="fw-bold me-2">Description:</span><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "15%" }}>Date:</span><p className="card-text">2-4-2022 13:45:23 GMT</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "6%" }}>Duration:</span><p className="card-text">13:45:23</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Swimming
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <div className="card text-start" style={{ width: "26rem" }}>
                                        <div className="card-body">
                                            <div className="card-title d-flex"><span className="fw-bold me-2">Description:</span><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "15%" }}>Date:</span><p className="card-text">2-4-2022 13:45:23 GMT</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "6%" }}>Duration:</span><p className="card-text">13:45:23</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Hiking
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-center">
                                    <div className="card text-start" style={{ width: "26rem" }}>
                                        <div className="card-body">
                                            <div className="card-title d-flex"><span className="fw-bold me-2">Description:</span><p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "15%" }}>Date:</span><p className="card-text">2-4-2022 13:45:23 GMT</p></div>
                                            <div className="card-title d-flex"><span className="fw-bold" style={{ marginRight: "6%" }}>Duration:</span><p className="card-text">13:45:23</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                    </div>
                </div>
            </div>
        </div>
    )
}
