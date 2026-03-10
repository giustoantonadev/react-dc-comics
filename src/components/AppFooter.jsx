export default function AppFooter({ linksColumnOne, linksColumnTwo, linksColumnThree }) {


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

                            {linksColumnOne.map(linkColumnOne => (
                                <li key={linkColumnOne.id}>
                                    <a href={linkColumnOne.url}>{linkColumnOne.text}</a>
                                </li>
                            ))}


                            <h4 className="text-white pt-2">SHOP</h4>

                            <a href="/shop dc">Shop DC</a>
                            <br></br>
                            <a href="/shop dc collectibles">Shop DC Collectibles</a>


                        </div>

                        <div className="col-2">
                            <h4 className="text-white">DC</h4>

                            {linksColumnTwo.map(linkColumnTwo => (
                                <li key={linkColumnTwo.id}>
                                    <a href={linkColumnTwo.url}>{linkColumnTwo.text}</a>
                                </li>
                            ))}

                        </div>

                        <div className="col-2">
                            <h4 className="text-white">SITES</h4>

                            {linksColumnThree.map(linkColumnThree => (
                                <li key={linkColumnThree.id}>
                                    <a href={linkColumnThree.url}>{linkColumnThree.text}</a>
                                </li>
                            ))}

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