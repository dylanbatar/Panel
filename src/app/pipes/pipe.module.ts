import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImagesPipe } from "./images.pipe";

@NgModule({
  declarations: [ImagesPipe],
  exports: [ImagesPipe],
  imports: [CommonModule]
})
export class PipeModule {}
