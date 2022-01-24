```

function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  // Escreva seu código aqui
  let a = arrayDeNumeros.filter((a,i)=>{
    if(a === numeroEscolhido){
      return a
    }
  })
  
  if(a[0] === numeroEscolhido){
    return `O número ${numeroEscolhido} aparece ${a.length}x`
  }else{
    return `Número não encontrado`
  }
}

```