const webApiUrl = "http://my-json-server.typicode.com/skoerdigital/fakeapi/active";

class ScooterService {
    
    get = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request(webApiUrl, options);
        const response = await fetch(request);
        return response.json();
    }

    beep = async (id) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify({})
        }
        const request = new Request("http://eecoscootersy.com/api/v1/scooters/2/beep", options);
        const response = await fetch(request);
        return response;
    }

    unlock = async (id) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify({})
        }
        const request = new Request("http://eecoscootersy.com/api/v1/scooters/2/unlock", options);
        const response = await fetch(request);
        return response;
    }

    lock = async (id) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = {
            method: "POST",
            headers,
            body: JSON.stringify({
                EndPoint:{
                    Latitude: 21.057934,
                    Longitude: 52.237296
                },
                DistanceKilometers: 10
            })
        }
        const request = new Request("http://eecoscootersy.com/api/v1/scooters/2/lock", options);
        const response = await fetch(request);
        return response;
    }



    // put = async (model) => {
    //     const headers = new Headers()
    //     headers.append("Content-Type", "application/json");
    //     var options = {
    //         method: "PUT",
    //         headers,
    //         body: JSON.stringify(model)
    //     }
    //     const request = new Request(webApiUrl, options);
    //     const response = await fetch(request);
    //     return response;
    // }
    // delete = async (id) => {
    //     const headers = new Headers();
    //     headers.append("Content-Type", "application/json");
    //     const options = {
    //         method: "DELETE",
    //         headers
    //     }
    //     const request = new Request(webApiUrl + "/" + id, options);
    //     const response = await fetch(request);
    //     return response;
    // }
}

export default ScooterService;