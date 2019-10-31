const paypalSandboxUrl = "https://api.sandbox.paypal.com/v1/oauth2/token";

class PayPalService {

    initConnection = async () => {
        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic QVRrdk5qckNUUC1jWUZ2bGZ3alVlb1N6VVBkbmozMkRZYVl3V0pmRWRKaWpLN3JMRHM4RnJYSDRJNjVqeUtXU2tfM1FZaXZXd0t3eThwTEs6RUtLUFhDcFFxTUNwQTJkbnVHWFBhWkY0RUZZU1Zub0xEbUloWlZ5b2N2MEVXMjBiQzd1WmpKa21lVFV3RkRPQlpISGtTNnZ3N1FXM1FXalo`
        });
        const options = {
            method: "POST",
            headers,
            body: 'grant_type=client_credentials'
        };
        const request = new Request(paypalSandboxUrl, options);
        const response = await fetch(request);
        return response.json();
    };

    makePayment = async (token, details) => {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(details)
        };
        const request = new Request(paypalSandboxUrl, options);
        const response = await fetch(request);
        return response.json();
    }
}

export default PayPalService;
