export class Experiencia {
    id!:number;
    nombre:string;
    descripcion:string;
    fechaInicio:Date;
    fechaFinalizacion:Date;

    constructor(nombre:string, descripcion:string,fechaInicio:Date,fechaFinalizacion:Date){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFinalizacion = fechaFinalizacion;
    }
}
