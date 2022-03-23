import axios from 'axios';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GOOGLE_API_KEY = 'AIzaSyCT-r6OXHg5idQfA8x5vLAlMb8Pul4QE6Q';
//declare var google: any;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;

    type GoogleGeocodingResponse = {
        results: {
            geometry: {
                location: { lat: number, lng: number }
            }
        }[];
        status: 'OK' | 'ZERO_RESULTS';
    }

    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`)
        .then(response => {
            if (response.data.status !== 'OK') {
                //throw new Error('Could not fetch location');
            }
            //const coordinates = response.data.results[0].geometry.location;
            const coordinates = {lat: 40.41, lng: -73.99};
            const map = new google.maps.Map(document.getElementById("map")!, {
                center: coordinates,
                zoom: 16
            });

            new google.maps.Marker({ position: coordinates, map: map });
        })
        .catch(e => {
            alert(e.message);
            console.log(e);
        })

    // https://maps/googleapis.com/maps/api/geocode/json?address
}

form.addEventListener('submit', searchAddressHandler);