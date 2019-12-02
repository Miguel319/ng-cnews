import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "countryScan"
})
export class CountryScanPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let country = "";
    const us = "The United States";

    switch (value) {
      case "us":
        country = us;
        break;
      case "ca":
        country = "Canada";
        break;
      case "mx":
        country = "Mexico";
        break;
      case "ar":
        country = "Argentina";
        break;
      case "ve":
        country = "Venezuela";
        break;
      default:
        country = us;
    }

    return country;
  }
}
