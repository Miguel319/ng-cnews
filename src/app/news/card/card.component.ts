import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../models/article.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit() {}
}
