import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {

newReleases: any[] = [];
loading : boolean = true;

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data:any) => {
      console.log(data);

      this.newReleases = data;
      this.loading = false;
      
    });
  }
}
