import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import moment from 'moment'
import jsonData from '../services/data.json'
import icon from '../images/icons/02d.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Main = () => {

    //const [cityValid, setCityValid] = useState(false)
    const [location, setLocation] = useState('')
    const [search, setSearch] = useState()


    const dataa = jsonData

    const fetchData = async () => {
        const KEY = 'eaea703509ae1465a5cc93b8cac5e6a4'
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${KEY}&units=metric&formatted=0`

        try {
            const response = await fetch(API)
            const data = await response.json()
            console.log(data)
            setSearch(data)
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
        console.log(location)
    }

    const handleChange = (e) => {
        setLocation(e.target.value)
        //console.log(e.target.value)
    }
    /*const icons = `./icons/${search.list[0].weather[0].icon}.svg`;
    const icond1 = `./icons/${search.list[7].weather[0].icon}.svg`;
    const icond2 = `./icons/${search.list[15].weather[0].icon}.svg`;
    const icond3 = `./icons/${search.list[23].weather[0].icon}.svg`;
    const icond4 = `./icons/${search.list[31].weather[0].icon}.svg`;
    const icond5 = `./icons/${search.list[39].weather[0].icon}.svg`;
*/

    return (
        <>
            <div className=' bg-slate-700 items-end backdrop-filter backdrop-blur-[10px] flex justify-center w-full'>
                <div className=' items-center rounded-[2px] flex h-20 justify-center w-[40rem]'>
                    <nav className=' w-10/12'>
                        <form onSubmit={handleSubmit} className=' box-border m-0 p-0' action="">
                            <div className=' box-border flex w-auto'>
                                <input className='h-10 w-[85%] pl-[15px] border-t-[2px_solid] border-l-[2px_solid] border-b-[2px_solid] border-r-[0] text-[black] bg-none rounded-tl-[25px] rounded-br-[0] rounded-tr-[0] rounded-bl-[25px] outline-[none] text-[1.1rem]' value={location} placeholder='Search your location' onChange={handleChange} />
                                <button className='flex-[auto] border-[1px] rounded-tl-[0] rounded-br-[25px] rounded-tr-[25px] rounded-bl-[0] cursor-pointer bg-none text-[black] border-t-[2px_solid] border-r-[2px_solid] border-b-[2px_solid] border-l-[0]' type='button' onClick={handleSubmit}>Buscar</button>
                            </div>
                        </form>
                    </nav>
                </div>
            </div>
            <div className='m-0 p-0 box-border'>
                {search && (
                    <div className=' rounded-2xl h-[55rem] mt-0 mr-[10%] mb-0 ml-[10%] opacity-70 bg-[linear-gradient(46deg,_black,_#0a2e3f73)] box-border'>
                        <div className=' h-[9rem] text-start w-full text-white'>
                            <div className=' pl-[15px] pt-6 text-4xl font-semibold'>
                                Daily Forcast
                            </div>
                            <div className=' pt-8 pr-0 pb-0 pl-12 m-0'>

                                <span className=' text-5xl font-bold m-0 p-0'>{search.city.name}</span>

                                <br />
                                <span className=' text-xl font-bold pt-0 text-end'>{moment.utc(new Date().setTime(search.list[0].dt * 1000)).add(search.city.timezone, "seconds").format("dddd, MMMM Do YYYY, ")}</span>
                            </div>
                        </div>

                        <div className=' border-b-2 flex flex-wrap pb-8 text-center w-full text-white'>
                            <div className=' w-3/6 border-r-2 flex flex-row h-60 text-center m-0 p-0'>
                                <img src={`http://openweathermap.org/img/wn/${search.list[0].weather[0].icon}@2x.png`} alt="" />
                                <div className=' box-border text-center pt-20 w-3/6 m-0 p-0'>
                                    <span className=' text-7xl font-bold ml-20 box-border'>{search.list[0].main.temp.toFixed(1)}&deg; </span>{" "}
                                    <br />
                                    <span className=' text-xl font-bold'>{" "}
                                        {search.list[0].weather[0].description}</span>
                                </div>
                            </div>
                            <div className='flex grow flex-wrap h-60 text-center w-min box-border m-0 p-0'>
                                <div className='grow h-2/4 pt-8 text-center w-1/3 box-border'>
                                    <span className=' font-bold text-4xl'>{search.list[0].main.temp_max.toFixed(1)}{" "}</span>
                                    <br /><span className=' text-xl font-bold'>High</span>
                                </div>
                                <div className='grow h-2/4 pt-8 text-center w-1/3 box-border'>
                                    <span className=' font-bold text-4xl'>
                                        {" "}0{search.list[0].wind.speed.toFixed()}_km/h
                                    </span>{" "}
                                    <br /><span className=' text-xl font-bold'>Wind Speed</span>
                                </div>
                                <div className='grow h-2/4 pt-8 text-center w-1/3 box-border'>
                                    <span className=' font-bold text-4xl'>{moment.utc(search.city.sunrise, 'X').add(search.city.timezone, 'seconds').format('h:mm a')}{' '}</span>
                                    <br />
                                    <span className=' text-xl font-bold'>Sunrise</span>
                                </div>
                                <div className='grow h-2/4 pt-8 text-center w-1/3 box-border'>
                                    <span className=' font-bold text-4xl'>
                                        {search.list[0].main.temp_min.toFixed(1)}{' '}
                                    </span>{' '}
                                    <br /><span className=' text-xl font-bold'>Low</span>
                                </div>
                                <div className='grow h-2/4 pt-8 text-center w-1/3 box-border'>
                                    <span className=' font-bold text-4xl'>{search.list[0].main.humidity}%</span>{' '}
                                    <br /><span className=' text-xl font-bold'>Humadity</span>
                                </div>
                                <div className='grow h-2/4 pt-8 text-center w-1/3 box-border'>
                                    <span className=' font-bold text-4xl'>{moment.utc(search.city.sunset, 'X').add(search.city.timezone, 'seconds').format('h:mm a')}{' '}</span>
                                    <br />
                                    <span className=' text-xl font-bold'>Sunset</span>
                                </div>
                            </div>
                        </div>
                        <div className=' text-4xl font-semibold pl-[15px] pt-6 box-border text-white'>
                            Five Days Forecast
                        </div>
                        <div className='flex text-center h-auto items-center pt-[20px] pr-[10px] pb-0 pl-[10px] w-full text-white'>
                            <div className=' border  border-[#536062] grow h-88 pt-8 text-center w-60 '>
                                <span className=' font-bold text-2xl'>{moment(new Date().setTime(search.list[7].dt * 1000)).format(
                                    "ddd"
                                )}</span>
                                <br />
                                <div className='flex justify-center'>
                                    <img className=' w-20' src={`http://openweathermap.org/img/wn/${search.list[7].weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <br />
                                <span className=' text-[large] font-bold'>Temp</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[7].main.temp.toFixed(1)} C&deg;{" "}</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Feel like</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[7].main.feels_like.toFixed(1)} C&deg;</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Moist</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[7].main.humidity.toFixed()} %</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>{search.list[7].weather[0].main}</span>{' '}
                            </div>
                            <div className=' border  border-[#536062] grow h-88 pt-8 text-center w-60 '>
                                <span className=' font-bold text-2xl'>{moment(new Date().setTime(search.list[7].dt * 1000)).format(
                                    "ddd"
                                )}</span>
                                <br />
                                <div className='flex justify-center'>
                                    <img className=' w-20' src={`http://openweathermap.org/img/wn/${search.list[7].weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <br />
                                <span className=' text-[large] font-bold'>Temp</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[7].main.temp.toFixed(1)} C&deg;{" "}</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Feel like</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[7].main.feels_like.toFixed(1)} C&deg;</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Moist</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[7].main.humidity.toFixed()} %</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>{search.list[7].weather[0].main}</span>{' '}
                            </div>
                            <div className=' border  border-[#536062] grow h-88 pt-8 text-center w-60 '>
                                <span className=' font-bold text-2xl'>{moment(new Date().setTime(search.list[15].dt * 1000)).format(
                                    "ddd"
                                )}</span>
                                <br />
                                <div className='flex justify-center'>
                                    <img className=' w-20' src={`http://openweathermap.org/img/wn/${search.list[15].weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <br />
                                <span className=' text-[large] font-bold'>Temp</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[15].main.temp.toFixed(1)} C&deg;{" "}</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Feel like</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[15].main.feels_like.toFixed(1)} C&deg;</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Moist</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[15].main.humidity.toFixed()} %</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>{search.list[15].weather[0].main}</span>{' '}
                            </div>
                            <div className=' border  border-[#536062] grow h-88 pt-8 text-center w-60 '>
                                <span className=' font-bold text-2xl'>{moment(new Date().setTime(search.list[23].dt * 1000)).format(
                                    "ddd"
                                )}</span>
                                <br />
                                <div className='flex justify-center'>
                                    <img className=' w-20' src={`http://openweathermap.org/img/wn/${search.list[23].weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <br />
                                <span className=' text-[large] font-bold'>Temp</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[23].main.temp.toFixed(1)} C&deg;{" "}</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Feel like</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[23].main.feels_like.toFixed(1)} C&deg;</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Moist</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[23].main.humidity.toFixed()} %</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>{search.list[23].weather[0].main}</span>{' '}
                            </div>
                            <div className=' border  border-[#536062] grow h-88 pt-8 text-center w-60 '>
                                <span className=' font-bold text-2xl'>{moment(new Date().setTime(search.list[31].dt * 1000)).format(
                                    "ddd"
                                )}</span>
                                <br />
                                <div className='flex justify-center'>
                                    <img className=' w-20' src={`http://openweathermap.org/img/wn/${search.list[31].weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <br />
                                <span className=' text-[large] font-bold'>Temp</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[31].main.temp.toFixed(1)} C&deg;{" "}</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Feel like</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[31].main.feels_like.toFixed(1)} C&deg;</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Moist</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[31].main.humidity.toFixed()} %</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>{search.list[31].weather[0].main}</span>{' '}
                            </div>
                            <div className=' border  border-[#536062] grow h-88 pt-8 text-center w-60 '>
                                <span className=' font-bold text-2xl'>{moment(new Date().setTime(search.list[39].dt * 1000)).format(
                                    "ddd"
                                )}</span>
                                <br />
                                <div className='flex justify-center'>
                                    <img className=' w-20' src={`http://openweathermap.org/img/wn/${search.list[39].weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <br />
                                <span className=' text-[large] font-bold'>Temp</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[39].main.temp.toFixed(1)} C&deg;{" "}</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Feel like</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[39].main.feels_like.toFixed(1)} C&deg;</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>Moist</span>{' '}
                                <span className=' text-[#d3d3d3] text-[medium]'>{search.list[39].main.humidity.toFixed()} %</span>{' '}
                                <br />
                                <br />
                                <span className=' text-[large] font-bold'>{search.list[39].weather[0].main}</span>{' '}
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
