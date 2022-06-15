import { NgModule } from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";

const modules = [NzButtonModule, NzGridModule, NzModalModule, NzSelectModule, NzFormModule, NzInputModule, NzCheckboxModule]

@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule { }
