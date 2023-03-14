import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  movie  = <any>null;
  production_company  = <any>null;
  imageBaseUrl=environment.image;
  production_country = <any>null;
 companyName = <any>null;
  constructor(private route:ActivatedRoute,private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id!).subscribe((res)=>{

      const name = 'production_companies'
      this.production_company = Object.values(res)[13][0];
      this.production_country = Object.values(res)[14][0];
      console.log(res)
      this.movie=res;
      // this.companyName=res;

    })
    // const name = this.route.snapshot.paramMap.get('id');
    // this.movieService.getMovieDetails
  }

  openHomePage(){
    window.open(this.movie.homepage)
  }

}
