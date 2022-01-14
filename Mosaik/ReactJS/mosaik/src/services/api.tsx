import { IUser } from '../models/user';
import { arrayHouses, arrayUser, galleryHouses } from './mockup';

const url = "http://localhost:8080/api";

export const Get = async (endpoint: string) =>{
    return (
        fetch(url + endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            })
            .catch(error => console.log(error))
    );
}

export const MockupGet : IUser[] | any = (endpoint: string, id: number = 0)  =>{
    switch (endpoint){
        case '/houses':
            return (arrayHouses);
        
        case '/house/':
            let gallery = galleryHouses.filter(gallery => gallery.house === id);
            let house =  arrayHouses.find(house => house.id === id);
            return {...house, gallery: gallery};

        case '/users/':
            console.log("user:" + id);
            return arrayUser.find(user => user.id === id);
        
        case '/users':
            return arrayUser;
    }
}