class CEmpleado {
    constructor(nombre, añoIngreso, salario, direccion) {
      this.nombre = nombre;
      this.añoIngreso = añoIngreso;
      this.salario = salario;
      this.direccion = direccion;
    }
    
    residenciaEnWallStreet() {
      if (this.direccion.includes("WallStreet")) {
        return "Reside en WallStreet" + "<br>";
      } else {
        return "No reside en WallStreet" + "<br>";
      }
    }
  }
  
  let empleado = new CEmpleado("Robert", 2005, "3000USD", "64C- WallStreet");
  
  function antiguedad() {
    let año = new Date().getFullYear();
    let antiguedad = año - empleado.añoIngreso;
    let años;
  
    for (let i = 0; i <= antiguedad; i++) {
      años = i;
    }
    
    document.write("años de residencia: " + años);
}
  document.write(empleado.nombre + " " + empleado.añoIngreso + " " + empleado.salario + " " + empleado.direccion + "<br> <br>");
  document.write(empleado.residenciaEnWallStreet() + "<br>");
  antiguedad();
  