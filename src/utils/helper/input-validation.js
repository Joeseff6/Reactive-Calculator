const inputValidation = (string) => {
  const regex = /[^0-9\+\*-/=\.]/g
  return string.replace(regex,"");
}

export default inputValidation;