import { arrayHouses } from './mockup';

const url = "http://localhost:8080/api"

export const Get = async (endpoint: string) =>{
    return (
        fetch(url + endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return data;
            })
            .catch(error => console.log(error))
    )
}

export const MockupGet = (endpoint: string) =>{
    return (arrayHouses);
}