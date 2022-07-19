const SearchBookmark = ()=>{
    <h1>Search</h1>
    return <>{error.message}</>;

        } 
        if (!isLoaded) {
            return <>loading...</>;
        } else {
            return (
                <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                
                                onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search countries here</span>
                        </label>
                    </div>
                    <ul className="card-grid">
                        {names.map((name) => (
                            <li>
                                <article className="card" key={name.callingCodes}>
                                    <div className="card-image">
                                        <img src={name.flag} alt={name.name} />
                                    </div>
                                    <div className="card-content">
                                        <h2 className="card-name">{name.name}</h2>
                                        <ol className="card-list">
                                            <li>
                                                population:{" "}
                                                <span>{name.population}</span>
                                            </li>
                                            <li>
                                                Region: <span>{name.link}</span>
                                            </li>
                                            <li>
                                                Capital: <span>{name.picture}</span>
                                            </li>
                                        </ol>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    

    ReactDOM.render(<App />, document.getElementById("root"));

export default SearchBookmark;