const PubSub = require('../helpers/pub_sub.js')

const ViewResult = function(resultSpace){
  this.resultSpace = resultSpace
}

ViewResult.prototype.bindEvents = function () {
  PubSub.subscribe('forRender:familyfound' , (evt) =>{
    const familyToShow = evt.detail;
    this.show(familyToShow)
  })
};


ViewResult.prototype.show = function (family) {
  const instrumentFamily = family.name
  const description = family.description
  const instruments = family.instruments.map((instrument)=>{
    return instrument
  })
  this.resultSpace.innerHTML = "";
  const name = document.createElement('h1')
  name.textContent = instrumentFamily
  this.resultSpace.appendChild(name)
  const desc = document.createElement('p')
  desc.textContent = description
  this.resultSpace.appendChild(desc)
  const list = document.createElement('ul')
  instruments.forEach((instrument) => {
    const li = document.createElement('li')
    li.textContent = instrument
    return list.appendChild(li)
  })
  this.resultSpace.appendChild(list);
};






module.exports = ViewResult;
