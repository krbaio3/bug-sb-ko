import { A11yModule } from "@angular/cdk/a11y";
import { CommonModule } from "@angular/common";
import { MatCommonModule } from "@angular/material/core";
import { NgModule } from "@angular/core";
import { SlideModule } from "./slide/slide.module";

@NgModule({
  imports: [
    CommonModule,
    MatCommonModule,
    A11yModule,
    SlideModule, // Se ha cambiado
  ],
  exports: [
    SlideModule,
  ],
})
export class PatternLibModule {}
