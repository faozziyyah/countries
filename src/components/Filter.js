import React from 'react'

const Filter = () => {
    return (
        <div>
            <section className="filter">
                <form className="form-control">
                    <input type="search" name="search" id="search" placeholder="Search for a country" />
                </form>

                <div className="region-filter">
                    <select name="select" id="select" className="select">
                        <option value="filter by region">Filter by region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europia">Europia</option>
                        <option value="Oceonia">Oceonia</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default Filter
