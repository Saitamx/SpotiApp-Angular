import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe((params: any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
      this.loading = true;
    });
  }

  getArtista(id: string): any {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artista) => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string): any {
    this.spotify.getTopTracks(id).subscribe((topTracks) => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
