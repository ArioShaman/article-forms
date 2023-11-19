import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@article-workspace/smart-ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    NavigationComponent,
  ],
  selector: 'article-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'article-workspace';
}
