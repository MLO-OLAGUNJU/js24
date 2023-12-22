/* const playGuitar = () => {
  return "Playing Guitar";
};

const shredding = () => {
  return "Shredding some licks";
};

const plucking = () => {
  return "Plucking the strings.............";
};
 */
/* export default playGuitar;
export { shredding, plucking }; */

//or

export default function playGuitar() {
  return "Playing Guitar";
}

export const shredding = () => {
  return "Shredding some licks";
};

export const plucking = () => {
  return "Plucking the strings.............";
};
