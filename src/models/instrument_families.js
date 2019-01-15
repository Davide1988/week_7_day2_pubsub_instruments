const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;

};


InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('instrumentview:data', this.data)

  PubSub.subscribe('familySelectedInMenu' , (evt) =>{
    const nameOfSelection = evt.detail;
    this.extrapolateDetails(nameOfSelection)
  })
};

InstrumentFamilies.prototype.extrapolateDetails = function (name) {
  const foundFamily = this.data.find((family) =>{
    return family.name === name
  });
  PubSub.publish('forRender:familyfound' , foundFamily)
};



module.exports = InstrumentFamilies;
