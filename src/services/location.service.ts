import GetLocation from 'react-native-get-location';
export default class LocationService {
    public async getCurrentLocation() {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 150000
        })
        
        return location
      } catch(err) {
        return false
      }
    }
}