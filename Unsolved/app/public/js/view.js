// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.
function renderCharacter(props){
  const { name, role, age, forcePoints } = props;
  return $(/*html*/`
      <h2>${name}</h2>
      <h3>Role: ${role}</h3>
      <h3>Age: ${age}</h3>
      <h3>Force Points: ${forcePoints}</h3>
  `);
}

// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  let searchedCharacter = $("#character-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/characters/" + searchedCharacter, function(character) {
    // log the data to our console
    console.log(character);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!character) {
      $("#well-section").append("<h2> The force is not strong with this one. Your character was not found. </h2>");
    }
    else {
      // otherwise
      // append the character name
      $("#well-section").append(renderCharacter(character));
    }
  });
});
