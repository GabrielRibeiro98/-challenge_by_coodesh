import { NgModule } from '@angular/core';
import { ThemeModule } from '../theme.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardArticleComponent } from './card-article/card-article.component';
import { ModaisModule } from '../modal/modais.module'

@NgModule({
  declarations: [
      CardArticleComponent,
  ],
    imports: [
      ThemeModule,
      CommonModule,
      FormsModule,
      ModaisModule
    ], exports: [
        CardArticleComponent,
    ]
})
export class ComponentsModule { }
