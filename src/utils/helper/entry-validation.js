const entryValidation = (event) => {
  console.log(event)
  if (event.target.value[0] === "0" && event.nativeEvent.data === "0") {
    return 0;
  } else {
    const regex = /[^0-9+*-/=.]/g
    return event.target.value.replace(regex,"");
  } 
}

export default entryValidation;