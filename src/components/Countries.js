import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Filter from "./Filter"

const url = 'https://restcountries.com/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([ ])
  
    useEffect(() => {
      const fetchCountries = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
      }
  
      fetchCountries()
    }, [ ])

    const removeCountry = (numericCode) => {
        const newCountry = countries.filter((country) => country.numericCode !== numericCode)
        setCountries(newCountry)
    }

    return (
        <>
        <Filter />
        <section className="grid">
            {countries.map((country) => {
                const { name, population, region, capital, flag, numericCode } = country

                return (
                    <article key={numericCode}>
                        <div className="section">
                            <img src={flag} alt={name} />
                            <section className="details">
                                <h3>{name}</h3>
                                <h4>Population: <span>{population.toLocaleString()}</span> </h4>
                                <h4>Region: <span>{region}</span> </h4>
                                <h4>Capital: <span>{capital}</span> </h4>
                            </section>
                            <div className="buttons">
                                <Link to={`/countries/${name}`} className="btn">Learn More</Link>
                                <button className="btn" onClick={() => removeCountry(numericCode)}>Remove Country</button>
                            </div>
                        </div>
                    </article>
                )

            })}
        </section>
        </>
    )
}

export default Countries
