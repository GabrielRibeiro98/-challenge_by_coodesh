import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    AccordionModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TabViewModule,
    DialogModule
  ],
  exports: [
    AccordionModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TabViewModule,
    DialogModule
  ],
})
export class ThemeModule {}
