class Pokemon{
    constructor(hp, ataque, defensa) {
        this.hp = hp
        this.ataque = ataque
        this.defensa = defensa
        this.movimiento = ""
        this.nivel = 1
        this.tipo = ""
    }
    fight(){
        if(this.movimiento === ""){
            throw new Error("No hay nigun movimiento")
        }
    }
    canFLy(){
        if(this.tipo === ""){
            throw new Error("No se especificó el tipo")
        }
        return this.tipo === "flying";
    }
}

class Charizard extends Pokemon{
    constructor(hp, ataque, defensa, movimiento) {
        this.movimiento = movimiento;
        this.tipo = "flying";
        super(hp, ataque, defensa);
    }
    fight(){
        super.fight();
        console.log(`Se usó ${this.movimiento} con un ataque de ${this.ataque}`)
    }
}
class User {
    _password;
  
    constructor(username, password) {
      this._password = password;
    }
  
    checkPassword(inputPassword) {
      return inputPassword === this._password;
    }
  }
  
  const user = new User("Angello", "password");
  
  console.log(user.checkPassword("password123")); // false
  console.log(user.checkPassword("password")); // true