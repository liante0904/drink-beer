import axios from 'axios';

export default class BeerService {
    beers(callback){
        console.log('beers')
        axios.get('http://localhost:4000/api/beers')
        .then( response => {
            console.log(response.data);
            callback(response.data);
        })
        .catch( err => {
            console.log(err);
            callback(null);
        })
        /*
        const response = await fetch('http://localhost:4000/api/beers');
        const body = await response.json();
        console.log(body.data);
        return body
        */
    }
    get(){
        console.log('get')
    }
    post(){
        console.log('post')
    }
    put(){
        console.log('put')
    }
    delete(id, callback){
        console.log('delete', id);
        axios.delete('http://localhost:4000/api/beers/' + id, { data: { id: id} })
        .then(response => {
            console.log(response.status);
            callback(response);
        })
        .catch( err => {
            console.log(err);
        });
    }
}