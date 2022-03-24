//* Exercicío 3

//* A ) a) Copie o código acima para um arquivo .ts depois:

//* - crie um *type* para representar um post; Feito
//* - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.

type posts = {
      autor: string,
      texto: string
}

const arrayPosts: string[] | number[] = [];

const person1: posts = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  };

  const person2: posts = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  };

  const person3: posts = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  };

  const person4: posts = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  };

  const perso5: posts = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  };

arrayPosts.push(person2, person3, person4)
