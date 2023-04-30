export default function Creations(){
    return(
        <div className="pt-5 ms-4 mt-5">
        <div className="ms-5 ps-4 pt-4">
            <div className="mt-5 ms-5 ">
                <div className="d-flex justify-content-between align-items-center ">
                    <h1 className="fw-light">OUR CREATIONS</h1>
                    <div className="me-5 pe-5">
                        <div className="me-5 pe-5">
                            <button className="me-5 w-100 py-1 px-3 btnBlack">SEE ALL</button>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-5 pt-5 d-flex flex-wrap me-5 pe-5">
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-deep-earth.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-25 fw-light"><strong>DEEP EARTH</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-night-arcade.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-50 fw-light"><strong>NIGHT ARCADE</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-soccer-team.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-50 fw-light"><strong>SOCCER TEAM VR</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-grid.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-25 fw-light"><strong>THE GRID</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-from-above.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-75 fw-light"><strong>FROM UP ABOVE VR</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-pocket-borealis.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-50 fw-light"><strong>POCKET BOREALIS</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-curiosity.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-50 fw-light"><strong>THE CURIOSITY</strong></h4>
                    </div>
                    <div className="creation bg-image d-flex flex-column-reverse me-4 mb-4" style={{backgroundImage: 'url(https://abdul-loopstudio.netlify.app/images/desktop/image-fisheye.jpg)', height:'400px', width: '200px'}}>
                        <h4 className="text-white-50 pb-3 ms-4 w-50 fw-light"><strong>MAKE IT FISHEYE</strong></h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}