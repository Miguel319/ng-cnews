import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Article } from "../../models/article.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() article: Article;
  @Input("i") index: number;
  @Output() cardChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  viewDetails() {
    this.cardChange.emit(this.index);
  }
}
