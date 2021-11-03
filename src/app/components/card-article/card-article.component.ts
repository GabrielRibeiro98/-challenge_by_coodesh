import {Component,Input, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import { Util } from '../../controller/util';

@Component({
    selector: 'app-card-article',
    templateUrl: './card-article.component.html',
    styleUrls: ['./card-article.component.css'],
})
export class CardArticleComponent implements OnInit {

  modalArticle = false

  @Input() indexCSS: number = 0;
  @Input() id: number = 0;
  @Input() url: string = '';
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() data: Date;
  @Input() summary: string = '';

  classCSS = ''

  constructor() {
  }

  ngOnInit() {
    if (this.indexCSS % 2 === 0) {
      this.classCSS = 'container-card'
    } else this.classCSS = 'container-card-reverse'
  }

  navSite() {
    window.open(this.url);
  }

}
