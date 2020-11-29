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
        'Bearer BQDSLgnNDJXH6ThzZUWry2gPtXQNdBg-IhFPqiu9Wdyzh8okoGzJLO-NK-kRapEnXGcci58L828VCTwUCsg',
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
