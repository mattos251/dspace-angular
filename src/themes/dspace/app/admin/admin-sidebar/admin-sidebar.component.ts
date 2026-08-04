import {
  AsyncPipe,
  NgClass,
  NgComponentOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '@ngx-translate/core';

import { AdminSidebarComponent as BaseComponent } from '../../../../../app/admin/admin-sidebar/admin-sidebar.component';
import { BrowserOnlyPipe } from '../../../../../app/shared/utils/browser-only.pipe';

@Component({
  selector: 'ds-base-admin-sidebar',
  templateUrl: '../../../../../app/admin/admin-sidebar/admin-sidebar.component.html',
  styleUrls: [
    '../../../../../app/admin/admin-sidebar/admin-sidebar.component.scss',
    './admin-sidebar.component.scss', // DSpace theme overrides
  ],
  animations: BaseComponent['animations'],
  imports: [
    AsyncPipe,
    BrowserOnlyPipe,
    NgbDropdownModule,
    NgClass,
    NgComponentOutlet,
    TranslatePipe,
  ],
})
export class AdminSidebarComponent extends BaseComponent {
}
