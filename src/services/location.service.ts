import GetLocation from 'react-native-get-location';
export default class LocationService {
    public async getCurrentLocation() {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 15000
        })
  
        console.tron.log(location)
        return location
      } catch(err) {
        return false
      }
    }
}