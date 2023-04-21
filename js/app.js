// access to the form values
document.querySelector("#generate-names").addEventListener("submit", loadNames);

// read the values and generate url
function loadNames(e) {
  e.preventDefault();

  // read the values from the form
  const country = document.querySelector("#country").value,
    genre = document.querySelector("#genre").value;


    let url = 'https://namefake.com/'
    if (country !== '') {
      url += (country + '/')
    } else {
      url += 'random/'
    }

    console.log(url)
}



