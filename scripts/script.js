const getIndexByBreakpoints = (breakpoints, value) => {
  let i = 0;

  while (i < breakpoints.length) {
    const element = breakpoints[i];

    if (i === 0 && value < element) {
      return i;
    }

    if (i === breakpoints.length - 1 && value >= element) {
      return i;
    }

    const previousElement = breakpoints[i - 1];

    if (value >= previousElement && value < element) {
      return i;
    }

    i++;
  }
};

//#region classes
class Person {
  gender;

  static get sizes() {
    return ['XXS', 'XXS or XS', 'XS', 'XS or S', 'S', 'S or M', 'M', 'M or L', 'L', 'L or XL', 'XL', 'XL or XXL', 'XXL'];
  }

  gender = '';

  get weightCategories() {
    return [];
  }

  get weightBreakpoints() {
    return [];
  }

  get heightCategories() {
    return [];
  }

  get heightBreakpoints() {
    return [];
  }

  constructor() {
    this.age = $('#enter-age').val();
    this.weight = parseFloat($('#enter-weight').val());
    this.height = parseFloat($('#enter-height').val());
    this.bodyType = $('#select-body-type').val();
    this.style = $('#select-style').val();
  }

  isValid() {
    return !!this.gender && !!this.age && !!this.weight && !!this.height && !!this.bodyType && !!this.style;
  }

  getWeightCategory() {
    const weightIndex = getIndexByBreakpoints(this.weightBreakpoints, this.weight);
    return this.weightCategories[weightIndex];
  }

  getHeightCategory() {
    const heightIndex = getIndexByBreakpoints(this.heightBreakpoints, this.height);
    return this.heightCategories[heightIndex];
  }

  getSizeToWear() {
    const weightCategory = this.getWeightCategory();
    const heightCategory = this.getHeightCategory();

    // Is this the wanted functionality? My body type failed before (65kg, 187cm)
    let sizeIndex = weightCategory + heightCategory;

    // Bodytype influence
    if (this.bodyType === 'g') sizeIndex--;
    if (this.bodyType === 'p') sizeIndex++;

    // Style influence
    if (this.style === 's') sizeIndex--;
    if (this.style === 'l') sizeIndex++;

    return Person.sizes[sizeIndex];
  }
}

class Male extends Person {
  gender = 'm';

  get weightCategories() {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  get weightBreakpoints() {
    return [50, 60, 70, 80, 90, 100];
  }

  get heightCategories() {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  get heightBreakpoints() {
    return [142, 154, 166, 178, 190, 202];
  }
}

class Female extends Person {
  gender = 'f';

  get weightCategories() {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  get weightBreakpoints() {
    return [50, 60, 70, 80, 90, 100];
  }

  get heightCategories() {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  get heightBreakpoints() {
    return [142, 154, 166, 178, 190, 202];
  }
}

class PersonFactory {
  static generatePerson(gender) {
    if (gender === 'm') {
      return new Male();
    } else if (gender === 'f') {
      return new Female();
    } else {
      return null;
    }
  }
}
//#endregion

$('#btn-generate').click(() => {
  const paragraphSize = $('#p-size');

  const selectedGender = $('#select-gender').val();

  const person = PersonFactory.generatePerson(selectedGender);

  if (!person || !person.isValid()) {
    paragraphSize.text('Please fill in all fields correctly.');
    return;
  }

  const size = person.getSizeToWear();

  paragraphSize.text(`You should go for ${size}.`);
});
