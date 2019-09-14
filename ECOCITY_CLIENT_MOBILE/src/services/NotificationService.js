const webApiUrl = "http://my-json-server.typicode.com/skoerdigital/fakeapi/notifications";

class NotificationService {
    
    get = async () => {
        const options = {
            method: "GET",
        }
        const request = new Request(webApiUrl, options);
        const response = await fetch(request);
        return response.json();
    }
    
}

export default NotificationService;