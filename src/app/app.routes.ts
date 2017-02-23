import {ClerkComponent} from "./clerk/clerk.component";
import {UserComponent} from "./user/user.component";
import {Routes} from "@angular/router";
const appRoutes : Routes = [
  {path: 'user', component: UserComponent},
  {path: 'clerk', component: ClerkComponent}
];
