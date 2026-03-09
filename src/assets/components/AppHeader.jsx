export default function AppHeader() {

    const buttons = [
        {
            id: 1,
            text: 'CHARACTERS',
            url: '/characters',
            current: false
        },
        {
            id: 2,
            text: 'COMICS',
            url: '/comics',
            current: true
        },
        {
            id: 3,
            text: 'MOVIES',
            url: '/movies',
            current: false
        },
        {
            id: 4,
            text: 'TV',
            url: '/tv',
            current: false
        },
        {
            id: 5,
            text: 'GAMES',
            url: '/games',
            current: false
        },
        {
            id: 6,
            text: 'COLLECTIBLES',
            url: '/collectibles',
            current: false
        },
        {
            id: 7,
            text: 'VIDEOS',
            url: '/videos',
            current: false
        },
        {
            id: 8,
            text: 'FANS',
            url: '/fans',
            current: false
        },
        {
            id: 9,
            text: 'NEWS',
            url: '/news',
            current: false
        },
        {
            id: 10,
            text: 'SHOP',
            url: '/shop',
            current: false
        }


    ]

    return (
        <header>
            <div className="container">
                <div className="row align-items-center p-2">

                    <div className="col-12 col-md-3 text-center text-md-start" id="logo-header">
                        <img src="./dc-logo.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-9 d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                        {buttons.map(button => (
                            <button key={button.id} className={button.current === true ? 'active' : ''}>{button.text}</button>
                        ))}

                    </div>
                </div>
            </div>
        </header>
    )
}