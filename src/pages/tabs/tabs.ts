import { Component } from '@angular/core';

import { MovementsPage } from '../movements/movements';
import { BreakPlanPage } from '../break-plan/break-plan';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MovementsPage;
  tab3Root = BreakPlanPage;

  constructor() {

  }
}
