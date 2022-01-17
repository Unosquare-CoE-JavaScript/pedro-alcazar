import { arrayHouses, arrayUser, galleryHouses } from './mockup';

const url = "http://"+process.env.REACT_APP_BACKEND_HOST+":"+process.env.REACT_APP_BACKEND_PORT+"/api";

export const Get: any = (endpoint: string, id: number = 0) =>{
    if (process.env.REACT_APP_PRODUCTION === "true")
        return (
            fetch(url + endpoint + (id !== 0 ? id: "")) 
                .then(response => response.json())
                .then(data => {
                    return data;
                })
                .catch(error => console.log(error))
        );
    
    switch (endpoint){
        case '/houses/':
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