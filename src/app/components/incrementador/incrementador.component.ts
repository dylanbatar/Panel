import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.scss"]
})
export class IncrementadorComponent implements OnInit {
  @Input() titulo: string = "titulo";
  @Input() porcentaje: number = 0;
  @Output() cambiarValor: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild("percent", { static: false }) percent: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  // Mandando pal padre
  emitirDatos() {
    this.percent.nativeElement.value = this.porcentaje;
    this.cambiarValor.emit(Number(this.percent.nativeElement.value));
  }

  // Detectar cambios del input pero desde el teclado
  modelChange(event) {
    this.porcentaje = this.rendondear(this.porcentaje);
    this.emitirDatos();
  }

  menos(number: number) {
    if (this.porcentaje > 0) {
      this.porcentaje -= number;
      this.porcentaje = this.rendondear(this.porcentaje);
    }
    this.emitirDatos();
  }

  mas(number: number) {
    if (this.porcentaje < 100) {
      this.porcentaje += number;
      this.porcentaje = this.rendondear(this.porcentaje);
    }
    this.emitirDatos();
  }

  rendondear(number) {
    return number > 100 ? 100 : number < 0 ? 0 : number;
  }
}
