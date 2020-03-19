import { Component, OnInit } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit {
  sessionName: string;
  
  constructor(public router: Router, private title: Title) {
    this.setBreakCrumbs();
  }

  ngOnInit(): void {}

  setBreakCrumbs() {
    this.observerChangeRoute().subscribe(
      (data: { titulo: string; descripcion: string }) => {
        this.title.setTitle(data.titulo);
        this.sessionName = data.titulo;
      }
    );
  }

  observerChangeRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((data: ActivationEnd) => data.snapshot.data?.titulo),
      map(r => r.snapshot.data)
    );
  }
}
