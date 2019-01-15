const PubSub = require('../helpers/pub_sub.js')

const InstrumentView = function(selector){
  this.selector = selector;

};

InstrumentView.prototype.bindEvents = function () {
  PubSub.subscribe('instrumentview:data', (data) =>{
    const arrayOfInstrumentObj = data.detail;
    this.insert(arrayOfInstrumentObj)
  })

  this.selector.addEventListener('change', (modification) =>{
    const selectedFamily = modification.target.value
    PubSub.publish('familySelectedInMenu', selectedFamily);
  })
};


InstrumentView.prototype.insert = function (instrumentsArray) {
  instrumentsArray.forEach((instrument , index) =>{
    const selection = document.createElement('option');
    selection.textContent = instrument.name;
    selection.name = index;
    this.selector.appendChild(selection);
  })
};


module.exports = InstrumentView;
