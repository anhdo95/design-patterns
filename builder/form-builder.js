class FormBuilder {
  constructor() {
    this.form = document.createElement('form')
  }

  addInput(label, name, type) {
    const input = document.createElement('input')
    input.setAttribute('name', name)
    input.setAttribute('type', type)
    
    const inputLabel = document.createElement('label')
    inputLabel.innerText = label
    inputLabel.appendChild(input)

    this.form.appendChild(inputLabel)
    return this
  }

  addSelect(label, name, options) {
    const select = document.createElement('select')
    select.setAttribute('name', name)
    options.forEach(({ text, value }) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.innerText = text
      select.appendChild(option)
    })

    const selectLabel = document.createElement('label')
    selectLabel.innerText = label
    selectLabel.appendChild(select)

    this.form.appendChild(selectLabel)
    return this
  }

  addButton(text) {
    const button = document.createElement('button');
    button.innerText = text;

    this.form.appendChild(button);
    return this;
  }

  build() {
    return this.form
  }
}

const signUpForm = new FormBuilder()
  .addInput("Username", "username", "text")
  .addInput("Password", "password", "password")
  .addSelect("Age", "age", [
    { text: "Under 18", value: 0 },
    { text: "18-25", value: 1 },
    { text: "26-35", value: 2 },
    { text: "36-45", value: 3 },
    { text: "46 or older", value: 4 },
  ])
  .addButton("Sign up")
  .build();

document.body.appendChild(signUpForm);