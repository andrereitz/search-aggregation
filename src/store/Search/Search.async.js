import { updateResults } from './Search.actions';

export const fetchResults = (query) => async (dispatch, getState) => {
    const services = getState().search.service.url;
    console.log('service is not string', services)
    
    const payload = {
        query: query,
        results: []
    }
    if(typeof services === 'object'){

        await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"), 
            fetch("https://jsonplaceholder.typicode.com/posts")
        ])
            .then(async ([res1, res2]) => {
                const search1 = await res1.json();
                const search2 = await res2.json();

                const finalArray = search1.concat(search2);

                console.log(finalArray);
                payload.results = finalArray;

            })
            .catch(err => console.log(err))
    }else{
        console.log('service is string')
        payload.results = await fetch("https://jsonplaceholder.typicode.com/posts")
                            .then(res => res.json());

        // dispatch(updateResults(payload));
    }

    dispatch(updateResults(payload));

    console.log('the posts', payload)
}