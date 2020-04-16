import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({
  name: "images"
})
export class ImagesPipe implements PipeTransform {
  transform(img: string, type: string = "user"): string {
    let url: string = "";
    
    if (!img) {
      return `${environment.hostNode}upload/image/user/${img}`;
    }

    if (img.indexOf("https") >= 0) {
      return img;
    }

    switch (type) {
      case "user":
        url = `${environment.hostNode}upload/image/${type}/${img}`;
        break;

      case "medic":
        url = `${environment.hostNode}upload/image/${type}/${img}`;
        break;

      case "hospital":
        url = `${environment.hostNode}upload/image/${type}/${img}`;
        break;

      default:
        console.log("no estas mandando ninguno de los tipos validos");
        break;
    }
    return url;
  }
}
