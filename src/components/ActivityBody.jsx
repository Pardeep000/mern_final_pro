import React from 'react'
import '../styles/activityBody.css'

export default function ActivityBody() {
    let handleActivityCreation = (e)=>{
        e.preventDefault()
        let dataArray={}
        let formdata = new FormData(e.target)
        for(let [key,value] of formdata.entries()){
            dataArray[key] = value
        }
        console.log('dataArray=>',dataArray)
        // e.target.reset()
    }
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                <div className="userName fs-2 fw-bold">Ishtiaq Hussain</div>
                <div className="activityBody container-fluid text-center mt-5 bg-light">
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#activityCreation">Create new Activity</button>
                    <div className="activityForm mt-4" style={{ maxWidth: "45%", margin: "auto" }}>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{ backgroundColor: "grey" }}>
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
                            <div className="accordion-item" style={{ backgroundColor: "grey" }}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Bicyle Riding
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
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
                            <div className="accordion-item" style={{ backgroundColor: "grey" }}>
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Walking
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
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
                            <div className="accordion-item" style={{ backgroundColor: "grey" }}>
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Swimming
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
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
                            <div className="accordion-item" style={{ backgroundColor: "grey" }}>
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Hiking
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
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
            {/*  */}
            {/* Create New Activity Modal */}
            <div className="modal fade" id="activityCreation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create new Activity</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={handleActivityCreation}>
                                <label>Select exercise activity</label>
                                <select class="form-select" aria-label="Default select example" name="uactivity">
                                    <option selected>Run</option>
                                    <option value="Walk">Walk</option>
                                    <option value="Hiking">Hiking</option>
                                    <option value="Swimming">Swimming</option>
                                    <option value="Bicycle Riding">Bicycle Riding</option>
                                </select>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Duration</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" name='duration' placeholder="2 hours 30 mintutes" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Elaborate your activity</label>
                                    <textarea className="form-control" name="udescription" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Create Activity</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
