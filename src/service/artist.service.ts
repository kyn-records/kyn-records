import { environment } from './../../enviroment';
import axios from 'axios';

export async function fetchArtists() {
  try {
    
    const response = await axios.get(`${environment.api}/artists`);
    return response.data.users;
    
  } catch (error) {
    console.error('Error fetching artists:', error);
  }
}