export default function Header(){
    return(
        <div className="bg-image py-4" style={{ backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-hero.jpg)'}}>

        <div className="d-flex pt-4 justify-content-between ">
            <div className="ps-5 ms-5">
            <h2 className="text-white-50 fw-bolder ps-5 ms-4 position-static">
                loopstudios
            </h2>
            </div>
            

            <div className=" pt-2 pe-5 me-5"> 
                <div className="d-flex text-white-50 fw-bold small pe-5">
                    <p className="page mx-2 small"><strong>About</strong></p>
                    <p className="page mx-2 small"><strong>Careers</strong></p>
                    <p className="page mx-2 small"><strong>Events</strong></p>
                    <p className="page mx-2 small"><strong>Products</strong></p>
                    <p className="page mx-2 small"><strong>Support</strong></p>
                </div>

            </div>
            </div>
            <div className="ms-3 ps-2 mt-5 pb-5 ">
            <div className="ms-5 ps-5 pt-5 pb-5 ">
            <div className="text-white-50 ms-5 pd-5 py-3 border border-light-50 pe-5 w-50">
                <h2 className="ps-4 fs-1">IMMERSIVE</h2>
                <h2 className="ps-4 fs-1">EXPERIENCES</h2>
                <h2 className="ps-4 fs-1">THAT DELIVER</h2>
            </div>
            </div>
            </div>
        </div>
    );
}