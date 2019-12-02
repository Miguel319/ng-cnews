import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "aboutScan"
})
export class AboutScanPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value === "nyt"
      ? "WSJ & New York Times"
      : value.substr(0, 1).toUpperCase() + value.substr(1);
  }
}
