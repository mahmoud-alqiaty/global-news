import React, {createContext, useReducer, useEffect, useState} from 'react'
import {initstate, reducer} from './Reducers'
import axios from 'axios';
import { storedState } from '../store/Store';
export const CommingDataContext = createContext()


const DataContextProvider =  ({children}) => {
    
    const storedstate = {...storedState}
    const [resdata, dispatch] = useReducer(reducer, initstate)

    //tacke action baside on window width
    const [smallWindow, setSmallWindow] = useState(false)

    const handleWindow = ()=>{
        if(window.innerWidth < 500){
            setSmallWindow(true)
        }
        else{
            setSmallWindow(false)
        }
    }
    window.addEventListener('resize', handleWindow)

    useEffect(() => {
        handleWindow() 
        // fetchAll()   
    }, []) 

    const fetchAll = ()=>{
        fetchData("general")
        fetchData("business")
        fetchData("entertainment")
        fetchData("health")
        fetchData("science")
        fetchData("sports")
        fetchData("technology")
        fetchPopularData()
    }

    const key = `d4bc12b2e00942ba9874b743b61f4a93`
    const keyTwo = `a6f726d1272942d6bbcfa8fce761e7c7`

    const fetchData = (category)=>{
        dispatch({type: `FETCH_REQUEST_${category}`});
        axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${key}`)
        .then(res=> {
            dispatch({type: `FETCH_SUCCESS_${category}`, payload: res.data})
            if(window.localStorage){
                localStorage.setItem(`${category}`, JSON.stringify(res.data))

            }
        })
        .catch(err=> dispatch({type: `FETCH_FAILURE_${category}`, payload: err.message}))
    }

    const fetchPopularData = ()=>{
        dispatch({type: `FETCH_REQUEST_popular`});
        axios.get(`https://newsapi.org/v2/top-headlines?category=general&sortBy=popularity&apiKey=${key}`)
        .then(resPopular=>{
            dispatch({type: `FETCH_SUCCESS_popular`, payload: resPopular.data})
            if(window.localStorage){
                localStorage.setItem(`popularNews`, JSON.stringify(resPopular.data))
            }
        }
        )

        .catch(errPopular=>dispatch({type: "FETCH_FAILURE_popular", payload: errPopular.message}))
    }

    const searcheddata = (word)=>{
        dispatch({type: `FETCH_REQUEST_search`});
        axios.get(`https://newsapi.org/v2/everything?q=${word}&apiKey=${key}`)
        .then(resSearch=>{
            dispatch({type: `FETCH_SUCCESS_search`, payload: resSearch.data})
        })
        .catch(err=> dispatch({type: "FETCH_FAILURE_search", payload: err.message}))
    }
    
    console.log("storedstate:", storedstate);
   

    const handleClick = ()=>{
         fetchAll()
    }


    return (
        <CommingDataContext.Provider value={{resdata, storedstate, handleClick, searcheddata,smallWindow }}>
            {children}
        </CommingDataContext.Provider>
    )
}

export default DataContextProvider
