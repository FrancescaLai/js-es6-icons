// 1. Creare una struttura dati che contenga una lista di icone e mostrarle in una pagina

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

const iconsContainer = $(".icons");

icons.forEach((icon) => {

  const {name, family, prefix} = icon;

  const html = `
  <div>
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">${name}</div>
  </div>
  `;

  iconsContainer.append(html);

});

// 2. Coloriamo le icone per tipo

const colors = [
  "yellow",
  "coral",
  "green"
];

const categories = getCategories(icons);

const iconsColored = icons.map((icon) => {
  const categoryIndex = categories.indexOf(icon.category);
  const colorItem = colors[categoryIndex];

  icon.color = colorItem;

  return icon;
});

  printIcons(iconsContainer, iconsColored);

// 3. Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const select = $("#type");

categories.forEach((item) => {
  const optionHtml = `<option value="${item}">${item}</option>`;
  select.append(optionHtml);
});

select.change(function(){
  const optionSelected = $(this).val();

  let iconsFiltered = iconsColored.filter((icon) => {

    return icon.category == optionSelected;
  });

  if ( iconsFiltered.length == 0) {
    iconsFiltered = iconsColored;
  }

  printIcons(iconsContainer, iconsFiltered);

});


// FUNZIONE GENERICA

function printIcons(target, icons){

  target.html("");

  icons.forEach((icon) => {
    const {name, family, prefix, color} = icon;

    const html = `
    <div>
      <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
      <div class="title">${name}</div>
    </div>
    `;

    target.append(html);
  });
}

function getCategories(icons){
  const categories = [];

  icons.forEach((item, i) => {
    if ( categories.includes(item.category) == false) {
      categories.push(item.category);
    }
  });

  return categories;
}
