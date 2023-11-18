import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-01',
  templateUrl: 'example-01.component.html',
  styleUrls: ['./example-01.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example01Component {}
