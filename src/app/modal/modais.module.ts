import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from "primeng/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TableModule } from "primeng/table";
import { ThemeModule } from '../theme.module'
import {ButtonModule} from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ModalArticleComponent } from './modal-article/modal-article.component';

@NgModule({
  declarations: [
        ModalArticleComponent
  ],
    imports: [
        CommonModule,
        DialogModule,
        FormsModule,
        ReactiveFormsModule,
        TableModule,
        ProgressSpinnerModule,
        ButtonModule,
        InputTextModule,
        ThemeModule
    ],
    exports: [
        ModalArticleComponent
    ]
})
export class ModaisModule { }
