import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-02',
  templateUrl: 'example-02.component.html',
  styleUrls: ['./example-02.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example02Component {}
