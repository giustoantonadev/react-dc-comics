export default function AppFooter() {






    return (
        <>

            <footer className="bg-primary">
                <div className="container first-sect-footer">
                    <div className="row p-4 justify-content-center">
                        <div className="col footer-img-tiny">
                            <img src="./buy-comics-digital-comics.png" alt="" />
                            <span>DIGITAL COMICS</span>
                        </div>

                        <div className="col footer-img-tiny">
                            <img src="./buy-comics-merchandise.png" alt="" />
                            <span>DC MERCHANDISE</span>
                        </div>

                        <div className="col footer-img-tiny">
                            <img src="./buy-comics-subscriptions.png" alt="" />
                            <span>SUBSCRIPTION</span>
                        </div>

                        <div className="col footer-img-tiny">
                            <img src="./buy-comics-shop-locator.png" alt="" />
                            <span>COMIC SHOP LOCATOR</span>
                        </div>

                        <div className="col footer-img-tiny">
                            <img src="./buy-dc-power-visa.svg" alt="" />
                            <span>DC POWER VISA</span>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="second-block">
                <div className="container second-sect-footer">
                    <div className="row p-4 justify-content-center">
                        <div className="col-2">
                            <h4 className="text-white">DC COMICS</h4>
                            <p>Characters</p>
                            <p>Movies</p>
                            <p>TV</p>
                            <p>Games</p>
                            <p>Videos</p>
                            <p>News</p>
                            <h4 className="text-white">SHOP</h4>
                            <p>Shop DC</p>
                            <p>Shop DC Collectibles</p>
                        </div>

                        <div className="col-2">
                            <h4 className="text-white">DC</h4>
                            <p>Terms Of Use</p>
                            <p>Privacy policy (New)</p>
                            <p>Ad Choices</p>
                            <p>Advertising</p>
                            <p>Jobs</p>
                            <p>Subscriptions</p>
                            <p>Talent Workshops</p>
                            <p>CPSC Certificates</p>
                            <p>Ratings</p>
                            <p>Shop Help</p>
                            <p>Contact Us</p>
                        </div>

                        <div className="col-2">
                            <h4 className="text-white">SITES</h4>
                            <p>DC</p>
                            <p>MAD Magazine</p>
                            <p>DC Kids</p>
                            <p>DC Universe</p>
                            <p>DC Power Visa</p>
                        </div>


                        <div className="col-6">
                            <img src="./dc-logo-bg.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="third-block bg-dark p-4">
                <div className="container third-sect-footer">
                    <div className="row">
                        <div className="col-6 text-center">
                            <button className="btn btn-secondary btn-outline-primary text-white bg-dark">SIGN-UP NOW!</button>
                        </div>
                        <div className="col-6 text-center d-flex justify-content-center align-items-center gap-3">
                            <span className="text-primary">FOLLOW US</span>
                            <span><img src="./footer-facebook.png" alt="" /></span>
                            <span><img src="./footer-twitter.png" alt="" /></span>
                            <span><img src="./footer-youtube.png" alt="" /></span>
                            <span><img src="./footer-pinterest.png" alt="" /></span>
                            <span><img src="./footer-periscope.png" alt="" /></span>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}