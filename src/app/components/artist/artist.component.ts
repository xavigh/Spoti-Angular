import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

 artist:any = {};
 topTracksArray:any[] = [];
 loadingArtist: boolean = true;

  constructor(private router: ActivatedRoute, private spotify:SpotifyService) {

    this.router.params.subscribe( params=>{
    
        console.log(params['id']);
        this.getOneArtist(params['id']);
        this.getTopTracks(params['id']);
    });

    
            
   }

   getOneArtist( id: string){ 

        //observable
        this.spotify.getOneArtist(id)
        .subscribe(oneArtist => {
        
          //console.log(oneArtist);
          this.artist = oneArtist;
          this.loadingArtist= false;

        });

  }

  getTopTracks(id:string){
    this.spotify.getTopTracks(id)
    .subscribe( topTracks => {
    console.log("this are top tracks ::::");
     console.log(topTracks);
     this.topTracksArray = topTracks;
    })
  
  }

}
