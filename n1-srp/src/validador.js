function EmailValidator(user) {
    return user.email.includes("@");
}

function PasswordValidator(user) {
    return user.password.length >= 8;
}

function AgeValidator(user) {
  return user.age >= 18;
}

export function validadorUsuario(user, email, password) {
  
  if (!EmailValidator(user)) return false;
  if (!PasswordValidator(user)) return false;
  if (!AgeValidator(user)) return false;


  return true


  // if (!usuario.email.includes('@')) return false;
  // if (usuario.password.length < 8) return false;
  // if (usuario.age < 18) return false;
}



// export function validadorUsuario(usuario) {
//   if (!usuario.email.includes('@')) return false;
//   if (usuario.password.length < 8) return false;
//   if (usuario.age < 18) return false;
//   return true;
// 
