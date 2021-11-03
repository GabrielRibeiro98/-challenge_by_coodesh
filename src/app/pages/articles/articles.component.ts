import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../../services/network.service';
import { URL_GET_ARTICLE } from '../../controller/staticValues';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  list = [];
  indexPaginator = 0
  filter = ''
  selectDate

  cities = [
            {name: 'Mais antigas', code: '&_sort=publishedAt:ASC'},
            {name: 'Mais novas', code: '&_sort=publishedAt:DESC'},
  ];

  constructor(private networkService: NetworkService){

  }

  ngOnInit(){
    this.networkService.get(URL_GET_ARTICLE, `articles?_limit=${10}`).subscribe((v: any) => {
      this.list = v
    })
  }

  searchArticle() {
    console.log(this.selectDate)
    this.networkService.get(URL_GET_ARTICLE, `articles?title_contains=${this.filter}&_limit=${10}${this.selectDate === undefined ? '' : this.selectDate.code}`).subscribe((v: any) => {
      this.list = v
    })
  }

  loadMore() {
    this.indexPaginator = this.indexPaginator + 10
    this.networkService.get(URL_GET_ARTICLE, `articles?_limit=${10}&_start=${this.indexPaginator}${this.selectDate === undefined ? '' : this.selectDate.code}&title_contains=${this.filter}`).subscribe((v: any) => {
      this.list = this.list.concat(v)
    })
  }
}
