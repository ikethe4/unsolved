// Code here handles what how the page displays all of the characters
// It pings the server. The server then pings the database and displays all of the characters.
const wellSection = $("#well-section");
function renderCharacter(props){
  const { character, index} = props;
  const { name, role, age, forcePoints } = character;
  return $(/*html*/`
    <div class="well" id="character-well-${index}">
      <h2>${name}</h2>
      <h3>Role: ${role}</h3>
      <h3>Age: ${age}</h3>
      <h3>Force Points: ${forcePoints}</h3>
    </div>
  `);
}

// make a get request to our api to grab every character
$.get("/api/characters", function(characters) {
  characters.forEach((character, index) => {
    wellSection.append(renderCharacter({ character, index}));
  })
});
