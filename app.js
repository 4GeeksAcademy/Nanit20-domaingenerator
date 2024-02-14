let pronoun = ["El", "Nuestro", "Su"];
let adj = ["gran", "enorme", "diminuto"];
let noun = ["bardo", "chancho", "piso"];
//si se quisiera añadir varias extensiones como .net o .us simplemente habría que añadir otra array e incluir un bucle más con esta última
pronoun.forEach((elementp) => {
  adj.forEach((elementa) => {
    noun.forEach((elementn) => {
      console.log(elementp + elementa + elementn+".com");
    });
  });
});
