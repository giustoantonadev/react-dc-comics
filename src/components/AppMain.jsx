import AppCard from "./AppCard";

export default function AppMain({ comics }) {

    return (
        <main className="bg-dark">
            <img src="./jumbotron.jpg" className="jumbotron" alt="main-img" />

            <div className="container">
                <div className="row">
                    {comics.map((comic) => (
                        <AppCard
                            key={comic.id}
                            thumb={comic.thumb}
                            title={comic.title}
                            series={comic.series}
                        />
                    ))}

                </div>
            </div>

        </main>
    )
}