import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-tab',
  imports: [],
  templateUrl: './tabs-tab.html',
  styleUrl: './tabs-tab.scss',
})
export class TabsTabComponent {
  @Input() title = '';
  active = false;
}
