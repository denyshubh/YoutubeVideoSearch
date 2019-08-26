import http from './httpService';
import { youtubeApiUrl } from "../config.json";
import { toast } from "react-toastify";
export async function getSearchResult(query) {
  let result = await http.get(youtubeApiUrl, {
    params: {
      part: 'snippet',
      maxResult: 5,
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
      q: query
    }
  });
  if (!result.data.items) {
    return [];
  }
  toast('Search Successfull');
  return result.data.items;
}