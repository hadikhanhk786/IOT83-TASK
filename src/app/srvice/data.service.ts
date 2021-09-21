import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  constructor(private http:HttpClient) { }
 
  async getdata(count) {
    const res = await this.http.get<any>('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6c1cf4c4d5fe283be9162eb56bae31a9&text=airport&per_page='+ count +'&page=1&format=json&nojsoncallback=1').toPromise().then(res => {
      return res;
    });
    return res;
  }

  
}
