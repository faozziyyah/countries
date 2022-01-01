import React, { useEffect, useState } from 'react'

const url = 'https://restcountries.com/v2/all'

const Countries = () => {
    const [countries, setCountries] = useState([ ])
  
    useEffect(() => {
      const fetchCountries = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
      }
  
      fetchCountries()
    }, [ ])

    return (
        <>
        <section className="grid">
            {countries.map((country) => {
                const { name, population, region, capital, flag, numericCode } = country

                return (
                    <article key={numericCode}>
                        <div className="section">
                            <img src={flag} alt={name} />
                            <section className="details">
                                <h3>{name}</h3>
                                <h4>Population: <span>{population}</span> </h4>
                                <h4>Region: <span>{region}</span> </h4>
                                <h4>Capital: <span>{capital}</span> </h4>
                            </section>
                            
                        </div>
                    </article>
                )

            })}
        </section>
        </>
    )
}

export default Countries
