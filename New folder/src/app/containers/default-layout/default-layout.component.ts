/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Ultimate Salon Full App Flutter
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2022-present initappz.
*/
import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { INavData } from '@coreui/angular';
import { navItems } from './_nav';
import { subNavItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems: INavData[] = [];
  public subNavItems: INavData[] = [];
  loginType: any = '';

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    public util: UtilService
  ) {
    
    this.loginType = localStorage.getItem('type');
    
    if(this.loginType=='city'){
            setTimeout(() => {
              // navItems.filter(x => x.name = this.util.translate(x.name));
              subNavItems.forEach((x) => {
                x.name = this.util.translate(x.name);
                x.children?.forEach((sub) => {
                  sub.name = this.util.translate(sub.name);
                });
              });
              this.subNavItems = subNavItems;
        
            }, 2000);
    }
    else if(this.loginType=='city'){

          setTimeout(() => {
            // navItems.filter(x => x.name = this.util.translate(x.name));
            navItems.forEach((x) => {
              x.name = this.util.translate(x.name);
              x.children?.forEach((sub) => {
                sub.name = this.util.translate(sub.name);
              });
            });
            this.navItems = navItems;

          }, 2000);
        }

  }
}
