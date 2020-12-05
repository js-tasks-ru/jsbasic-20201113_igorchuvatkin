let calculator = {
  read (a, b){
    calculator.first = a;
    calculator.two = b;
  },
  sum (){
    return ( this.first + this.two )
  },
  mul (){
    return ( this.first * this.two )
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально