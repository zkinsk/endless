import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import helper from "./utils/helper";

// import { App.filterSortData } from "./App"


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const data = [
  { stepNumber: 3,
    id: "adslfjsadoiusaf",
    versionContent: [
      {
        title: "My Title3.1",
        body: "My Body3.1",
        effectiveDate: "2019-05-20T03:04:05.000Z"
      },
      {
        title: "My Title3.2",
        body: "My Body3.2",
        effectiveDate: "2019-05-20T03:08:08.000Z"
      }
    ]
  },
  { stepNumber: 1,
    id: "adslfjsadodsasdaiusaf",
    versionContent: [
      {
        title: "My Title1.1",
        body: "My Body1.1",
        effectiveDate: "2019-05-20T03:04:05.000Z"
      },
      {
        title: "My Title1.2",
        body: "My Body1.2",
        effectiveDate: "2019-05-20T04:04:05.000Z"
      }
    ]
  },
  { stepNumber: 2,
    id: "adslfjsaadasddoiusaf",
    versionContent: [
      {
        title: "My Title2.1",
        body: "My Body2.1",
        effectiveDate: "2019-10-20T03:04:05.000Z"
      },
      {
        title: "My Title2.2",
        body: "My Body2.2",
        effectiveDate: "2019-05-20T03:04:05.000Z"
      }
    ]
  }
]



it ('Sorts and Maps the data', ()=>{
    expect(helper.filterSortData(data)).toStrictEqual(result)

})

const result = [
 
      {
        title: "My Title1.2",
        body: "My Body1.2",
        id: "adslfjsadodsasdaiusaf",
        stepNumber: "1"
      },
      {
        title: "My Title2.1",
        body: "My Body2.1",
        id: "adslfjsaadasddoiusaf",
        stepNumber: "2"
      },  
      {
        title: "My Title3.2",
        body: "My Body3.2",
        id: "adslfjsadoiusaf",
        stepNumber: "3"
      }
]