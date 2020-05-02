import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root", // automatic way to import services
})
export class SpotifyService {
  
  // sporify token updates every hour
  tokenSpoti: string = "Bearer BQDs7MTEGYaSGOLfYheRcJleZfCkM0V4wXR6_AYMAgMshbB5wyPrkfMAsdqfM81F9EX8ErGmYr3YNKOYXME";
  constructor(private http: HttpClient) {
    console.log("spoty service ready ! .. ");
  }
 
  // gets the url of spotify to unify all urls in one place.
  getQuery( query: string){

     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({ Authorization: this.tokenSpoti });

     return   this.http.get(url, {headers});
  }

  getNewReleases() {
        
    //observable
    return  this.getQuery( "browse/new-releases?limit=10")
    .pipe(map (data => data['albums'].items ));
     
    
  }

  getArtist( term: string){ 

        //observable
        return this.getQuery(`search?q=${term}&type=artist`)
        .pipe( map( data => data['artists'].items ));
            
   }
}
