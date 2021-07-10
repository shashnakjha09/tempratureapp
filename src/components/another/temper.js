import React, {useState , useEffect} from 'react'
import "./style.css"
function Temper() {
    const[city , setCity] = useState('');
    const[countryn , setCountryn] = useState('');
    const[icon , setIcon] = useState('');
    const[tempr , setTempr] = useState('');
    const[search , setSearch] = useState("Darbhanga");

    // hooks
    useEffect ( () => {
        const fetchApi =  async () => {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c13adb14d91b31ead5c3589fd1e36774`
            const response = await fetch(URL);
            const res = await response.json();
            setCity(res.wind);
            setTempr(res.main);
            setCountryn(res.sys);
            setIcon(res.weather);
        }
        fetchApi();
    } , [search]);
    
    return (
        <div>
             <div className="main">
                 <div className="main-heading">
                     <h1>Simple Weather App</h1>
                 </div>

                 <div className="search">
                  <div>
                    <input
                    type="search"
                    className="inputField"
                    onChange={(event) => {
                        setSearch(event.target.value)
                    }}
                    value={search}
                    />
                    <button type="button" className="danger">Search</button>
                  </div>
                 </div>

                 <div className="card-main">
                 {!city || !tempr || !countryn  || !icon ? (<p>No Data Found</p>) : (
                     <div className="card">
                         <div className="Location">{search}<span id="country">{countryn.country}</span></div>
                         <div className="temprature">{tempr.temp}<span id="unit">°K</span></div>
                         <div className="weather-icon"><i className="fa fa-cloud"></i></div>
                         <div className="weather-codition">Humidity:{tempr.humidity}</div>
                         <div className="wind-speed">Wind:{city.speed}km/hr</div>
                     </div>
                 )
                 }

                </div>

             </div>
        </div>
    )
}

export default Temper
