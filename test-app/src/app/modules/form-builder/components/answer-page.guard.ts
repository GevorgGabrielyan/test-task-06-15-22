import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {FormBuilderService} from "./form-builder.service";

@Injectable()
export class AnswerPageGuard implements CanActivate {
  constructor(private formBuilderService: FormBuilderService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.formBuilderService.hesAnswers()) {
      return true;
    }
    this.router.navigate(['form', 'builder']);
    return false;
  }
}
