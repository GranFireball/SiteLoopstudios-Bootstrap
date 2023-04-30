export default function Footer() {
    return (
        <div className="pt-5 mt-5">
            <div className="mt-5 pt-5">
                <div className="mt-5 ">
                    <footer className="bg-black text-white">
                        <div className="ms-5 pt-4">
                            <h3 className="ms-5 ps-5 pt-4">loopstudios</h3>
                            <div className="d-flex flex-row-reverse pe-5 me-5">
                                <img className="pe-5 me-5" src="https://abdul-loopstudio.netlify.app/images/icon-instagram.svg" alt="instagram"/>
                                <img className="pe-3" src="https://abdul-loopstudio.netlify.app/images/icon-pinterest.svg" alt="pinterest"/>
                                <img className="pe-3" src="https://abdul-loopstudio.netlify.app/images/icon-twitter.svg" alt="twitter"/>
                                <img className="pe-3" src="https://abdul-loopstudio.netlify.app/images/icon-facebook.svg" alt="facebook"/>
                            </div>
                            
                            <div className="d-flex mt-2 ms-5 ps-5 text-white-50 small">
                                <p className="pageFooter me-4 small"><strong>About</strong></p>
                                <p className="pageFooter me-4 small"><strong>Careers</strong></p>
                                <p className="pageFooter me-4 small"><strong>Events</strong></p>
                                <p className="pageFooter me-4 small"><strong>Products</strong></p>
                                <p className="pageFooter me-4 small"><strong>Support</strong></p>
                            </div>
                            <div className="d-flex flex-row-reverse pe-5 me-5">
                                <span className="pe-5 me-4 text-white-50 small">© 2021 Loopstudios. All rights reserved.</span>
                            </div>
                        </div>
                        <span className="d-flex justify-content-center small mt-4">
                            Challenge by
                            <a className="ms-1" href="https://www.frontendmentor.io/?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>
                            . Coded by 
                            <a className="ms-1" href="https://github.com/Samadeen" target="_blank" rel="noopener noreferrer">Momoh Abdulsamad</a>

                        </span>
                    </footer>
                </div>
            </div>

        </div>
    );
}