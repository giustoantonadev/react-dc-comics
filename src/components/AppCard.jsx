export default function AppCard({ id, thumb, title, series }) {

    return (
        <div className="col-6 col-md-4 col-lg-2 g-4">
            <div className="card bg-transparent border-0 h-100">
                <img className="card-img-top comic-img" src={thumb} alt={title} />
                <div className="card-body">
                    <h3 className="text-white title-comic">{series}</h3>
                </div>
            </div>
        </div>
    )
}