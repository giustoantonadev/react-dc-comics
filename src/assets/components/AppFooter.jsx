export default function AppFooter() {

    const linksColumnOne = [
        {
            id: 1,
            text: 'Characters',
            url: '/characters'
        },
        {
            id: 2,
            text: 'Movies',
            url: '/movies'
        },
        {
            id: 3,
            text: 'TV',
            url: '/tv'
        },
        {
            id: 4,
            text: 'Games',
            url: '/games'
        },
        {
            id: 5,
            text: 'Videos',
            url: '/videos'
        },
        {
            id: 6,
            text: 'News',
            url: '/news'
        }
    ]

    const linksColumnTwo = [
        {
            id: 1,
            text: 'Terms Of Use',
            url: '/terms-of-use'
        },
        {
            id: 2,
            text: 'Privacy policy(New)',
            url: '/privacy-policy'
        },
        {
            id: 3,
            text: 'Ad Choices',
            url: '/ad-choices'
        },
        {
            id: 4,
            text: 'Advertising',
            url: '/advertising'
        },
        {
            id: 5,
            text: 'Jobs',
            url: '/jobs'
        },
        {
            id: 6,
            text: 'Subscriptions',
            url: '/subscriptions'
        },
        {
            id: 7,
            text: 'Talent Workshops',
            url: '/talent-workshops'
        },
        {
            id: 8,
            text: 'CPSC Certificates',
            url: '/cpsc-certificates'
        },
        {
            id: 9,
            text: 'Ratings',
            url: '/ratings'
        },
        {
            id: 10,
            text: 'Shop Help',
            url: '/shop help'
        },
        {
            id: 11,
            text: 'Contact Us',
            url: '/contact-us'
        }
    ]

    const linksColumnThree = [
        {
            id: 1,
            text: 'DC',
            url: '/dc'
        },
        {
            id: 2,
            text: 'MAD Magazine',
            url: '/mad-magazine'
        },
        {
            id: 3,
            text: 'DC Kids',
            url: '/dc-kids'
        },
        {
            id: 4,
            text: 'DC Universe',
            url: '/dc-universe'
        },
        {
            id: 5,
            text: 'DC Power Visa',
            url: '/dc-power-visa'
        }
    ]

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