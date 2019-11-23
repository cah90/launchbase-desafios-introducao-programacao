const usuarios = [
  {nome: 'Cassia', tecnologias: ['HTML', 'CSS', 'JavaScript']},
  {nome: 'Stefaninhu', tecnologias: ['Python', 'React']},
  {nome: 'Erica', tecnologias: ['HTML', 'CSS']}
]

// function infoUsuarios(usuarios){

//   for(let i = 0; i < usuarios.length; i++) {
//    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
//   }
// }

// console.log(infoUsuarios(usuarios));

function checaSeUsuarioUsaCSS(usuario){
  for (let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === 'CSS') {
      return true;
    } 
    
  } 
  return false;
}

//console.log(checaSeUsuarioUsaCSS(usuarios[1]))

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}