import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, AfterViewInit} from '@angular/core';
import { URL_GET_ARTICLE } from '../../controller/staticValues'
import { NetworkService } from '../../services/network.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-modal-article',
  templateUrl: './modal-article.component.html',
  styleUrls: ['./modal-article.component.css']
})
export class ModalArticleComponent implements OnChanges{

  @Input() modalVisible = false;
  @Input() id = 0;
  @Output() closeModal = new EventEmitter()
  data

  constructor(private networkService: NetworkService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.modalVisible.currentValue) {
      this.networkService.get(URL_GET_ARTICLE, `articles/${String(this.id)}`).subscribe((v: any) => {
        this.data = v
      })
    }
  }

  fecharModal(e?) {
        this.closeModal.emit(false)
  }

  navSite() {
    window.open(this.data.url);
  }
}
