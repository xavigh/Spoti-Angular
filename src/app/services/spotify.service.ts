import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root", // automatic way to import services
})
export class SpotifyService {
  
  // sporify token updates every hour
  tokenSpoti: string = "Bearer BQD0FhAMfj4DJF00rgobUxk05Vy6AWhYpRZMagnJq8RmUWD5xVfH8CiI-G4M7LRw1KIqArwL9uBaG-onfHE";
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

    getArtists( term: string){

          //observable
          return this.getQuery(`search?q=${term}&type=artist`)
          .pipe( map( data => data['artists'].items ));
              
     }

   

   getOneArtist( id: string){ 

        //observable
        return this.getQuery(`artists/${id}`);
        // .pipe( map( data => data['artists'].items ));
            
   }

   getTopTracks( id: string){ 

        //observable
        return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe( map( data => data['tracks']));
            
   }






}// End Class
