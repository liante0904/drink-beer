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
    get(id, callback){
        axios.get('http://localhost:4000/api/beers/' + id)
        .then( response => {
            console.log(response.data);
            callback(response.data);
        })
        .catch( err => {
            console.log(err);
            callback(null);
        })
    }
    post(data, callback){
        axios.post('http://localhost:4000/api/beers', { data } )
        .then( response => {
            console.log(response.data);
            callback();
        })
        .catch( err => {
            console.log(err);
            callback();
        })
    }
    put(data, callback){
        const id = data._id;
        console.log('put');
        console.log('http://localhost:4000/api/beers/', id);
        console.log('data : ', data);
        axios.put('http://localhost:4000/api/beers/' + id, { data } )
        .then(response => {
            //console.log(response.status);
            console.log(response);
            callback(response);
        })
        .catch( err => {
            console.log(err);
        })
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