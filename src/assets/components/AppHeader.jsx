export default function AppHeader() {


    return (
        <header>
            <div className="container">
                <div className="row p-2">
                    <div className="col-4" id="logo-header">
                        <img src="./dc-logo.png" alt="" className="img-fluid" />
                    </div>
                    <div className="col-8 align-items-between anchor-click">
                        <button className="btn btn-style-none">CHARACTERS</button>
                        <button className="btn btn-style-none border-0 border-bottom border-4 border-primary text-primary">COMICS</button>
                        <button className="btn btn-style-none">MOVIES</button>
                        <button className="btn btn-style-none">TV</button>
                        <button className="btn btn-style-none">GAMES</button>
                        <button className="btn btn-style-none">COLLECTIBLES</button>
                        <button className="btn btn-style-none">VIDEOS</button>
                        <button className="btn btn-style-none">FANS</button>
                        <button className="btn btn-style-none">NEWS</button>
                        <button className="btn btn-style-none">SHOP</button>
                    </div>
                </div>
            </div>
        </header>
    )
}