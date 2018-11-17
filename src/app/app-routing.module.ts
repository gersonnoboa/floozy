import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumLengthComponent } from './album-length/album-length.component';

const routes: Routes = [
    {
        path: "album-length",
        component: AlbumLengthComponent
    },
    {
        path: "",
        redirectTo: "/album-length",
        pathMatch: "full"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
