import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabsTabComponent } from '../tabs-tab/tabs-tab';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabsTabComponent) tabs!: QueryList<TabsTabComponent>;
  ngAfterContentInit() {
    if (this.tabs.length) {
      this.tabs.first.active = true;
    }
  }
  activate(i: number) {
    this.tabs.forEach((t, idx) => (t.active = idx === i));
  }
}
