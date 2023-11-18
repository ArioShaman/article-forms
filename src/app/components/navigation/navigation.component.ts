import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
  styleUrl: 'navigation.component.less',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiLinkModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  activeItemIndex = 0;
}
