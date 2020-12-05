import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQD0FZ0Od5cPUdTvKlKC4t7-0zk3YCFm1CPUp-nKcMFOrlyDwWxFj1jV22fDF8zWe0YYDCod-JrguY-Dre0',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtista(id: string): any {
    return this.getQuery(`artists/${id}`);
    // .pipe(
    //   map((data: any) => data.artists.items));
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
