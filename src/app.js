const InstrumentView = require('./views/instrument_view.js')
const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const ViewResult = require('./views/view_results.js')


document.addEventListener('DOMContentLoaded', () => {

  const filler = new InstrumentFamilies(instrumentFamilyData)


  const selectView = document.querySelector('#instrument-families')
  const instrumentsView = new InstrumentView(selectView)
  instrumentsView.bindEvents();
  filler.bindEvents();

  const resultArea = document.querySelector('#results')
  const instrumentResult = new ViewResult(resultArea)
  instrumentResult.bindEvents();





});
