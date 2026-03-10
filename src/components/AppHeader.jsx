export default function AppHeader({ buttons }) {


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