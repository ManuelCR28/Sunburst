import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const data = {
  "id": "root",
  "parent": "",
  "name": "Root",
  "value": 0,
  "children": [
      {
          "id": "1",
          "parent": "",
          "name": "Scheduled",
          "value": 19.75,
          "color": "transparent",
          "children": [
              {
                  "id": "a568080c-6949-41db-883b-0449549b90bb",
                  "parent": "1",
                  "name": "Work Streams",
                  "link": null,
                  "value": 1,
                  "color": "rgba(236, 208, 120, .8)",
                  "children": [
                      {
                          "id": "2f6076b9-f2f3-49bd-aca0-4ae3a09bfde7",
                          "parent": "a568080c-6949-41db-883b-0449549b90bb",
                          "name": "",
                          "link": null,
                          "value": 1,
                          "children": [
                              {
                                  "id": "19e720f2-576a-42b8-8742-8c37ae3843d5",
                                  "parent": "2f6076b9-f2f3-49bd-aca0-4ae3a09bfde7",
                                  "name": "foo",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=MGY4djRxOG9uaXFxMG0zbjE1amRpdmxmNnJfMjAyMzExMjhUMTczMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              }
                          ]
                      }
                  ]
              },
              {
                  "id": "0909058e-282f-42d7-a77d-6f054b14b6bf",
                  "parent": "1",
                  "name": "Work Blocks",
                  "link": null,
                  "value": 5,
                  "color": "rgba(236, 208, 120, .8)",
                  "children": [
                      {
                          "id": "426b65b7-cfdd-4aa6-aafd-d1fc255816b3",
                          "parent": "0909058e-282f-42d7-a77d-6f054b14b6bf",
                          "name": "Call jury duty Cal",
                          "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=MG1rbGZicDluMGltMG83MTVpZ3VsZXM0ZWkgbWFudWVsQGluc3VtbWFyeS5jb20",
                          "value": 1,
                          "color": "rgba(236, 208, 120, .8)",
                          "children": []
                      },
                      {
                          "id": "05a6f1d3-238d-4efa-bd68-beda477135b8",
                          "parent": "0909058e-282f-42d7-a77d-6f054b14b6bf",
                          "name": "Someone Funeral",
                          "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NHZjdXBqaWhyNTBkNHFzaWd1Z2dwZzhsZnEgbWFudWVsQGluc3VtbWFyeS5jb20",
                          "value": 1,
                          "color": "rgba(236, 208, 120, .8)",
                          "children": []
                      },
                      {
                          "id": "0d71b97d-3017-46d2-bf07-e68dd9f74d64",
                          "parent": "0909058e-282f-42d7-a77d-6f054b14b6bf",
                          "name": "Dogtor appointment",
                          "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NnE0djBqM3M2Y2o0YmlmZzY2MTc0cTByb2QgbWFudWVsQGluc3VtbWFyeS5jb20",
                          "value": 1,
                          "color": "rgba(236, 208, 120, .8)",
                          "children": []
                      },
                      {
                          "id": "aaf5b457-d8d0-4843-8d6c-2ebbb7f1cd93",
                          "parent": "0909058e-282f-42d7-a77d-6f054b14b6bf",
                          "name": "Company status update",
                          "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NzlzMjhhMzdncHZrdnJxcjJ1MHM4YzFndDggbWFudWVsQGluc3VtbWFyeS5jb20",
                          "value": 1,
                          "color": "rgba(236, 208, 120, .8)",
                          "children": []
                      },
                      {
                          "id": "a056a429-faea-4242-b0ec-064fb051ecee",
                          "parent": "0909058e-282f-42d7-a77d-6f054b14b6bf",
                          "name": "Proudly.Market x LAGLCC E-commerce blablablablablablablablablablabla",
                          "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=N2ZtcWNhbjEzYXUyampudjZwdnA4MGlvc2YgbWFudWVsQGluc3VtbWFyeS5jb20",
                          "value": 1,
                          "color": "rgba(236, 208, 120, .8)",
                          "children": []
                      }
                  ]
              },
              {
                  "id": "908c9985-4951-414c-8429-e8a3bc762fdf",
                  "parent": "1",
                  "name": "Internal",
                  "link": null,
                  "value": 1,
                  "color": "rgba(83, 119, 122, .8)",
                  "children": [
                      {
                          "id": "43d22a86-7dfc-4cab-9b2d-90dea07e9ae8",
                          "parent": "908c9985-4951-414c-8429-e8a3bc762fdf",
                          "name": "Testing for Launch",
                          "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=MnFxbDl0YTA0dnFoaHFlN2IzYjQwdTdrcWIgbWFudWVsQGluc3VtbWFyeS5jb20",
                          "value": 1,
                          "color": "rgba(83, 119, 122, .8)",
                          "children": []
                      }
                  ]
              },
              {
                  "id": "019f7ddb-238a-428d-aa60-2d3941e52710",
                  "parent": "1",
                  "name": "Recurring Events",
                  "link": null,
                  "value": 12.75,
                  "color": "rgba(83, 119, 122, .8)",
                  "children": [
                      {
                          "id": "0695fabb-1975-43db-a050-bc339f18c1b1",
                          "parent": "019f7ddb-238a-428d-aa60-2d3941e52710",
                          "name": "Daily Events",
                          "link": null,
                          "value": 8,
                          "children": [
                              {
                                  "id": "5bf5aac0-1d38-4da2-b8cd-b62cc901372b",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "foo",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=MGY4djRxOG9uaXFxMG0zbjE1amRpdmxmNnJfMjAyMzExMjlUMTczMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "6af9b05d-fe7e-4fd1-b1cf-892f89ca79df",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjNUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "aa7febb6-82e8-4656-aa8b-526dfbf31f2b",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjRUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "a030d8c7-0013-49bc-8eb6-d963211a65f5",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjVUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "5ebb55fe-c38b-442b-8362-9ef0c2868bd9",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjZUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "39eb26e2-2b03-49cb-9683-bdd40af248ca",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjdUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "90c391e7-e3e9-41dd-9e15-b4c930b4ade5",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjhUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              },
                              {
                                  "id": "63bf3c4c-5e68-4bd8-9695-96073c900a61",
                                  "parent": "0695fabb-1975-43db-a050-bc339f18c1b1",
                                  "name": "repeat new",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=NTd2b2FucG4zNDFxM2VxMG5qMTYwazBicWlfMjAyMzExMjlUMTEzMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 1,
                                  "children": []
                              }
                          ]
                      },
                      {
                          "id": "77586b81-ff10-44ea-959f-a5b73a52706e",
                          "parent": "019f7ddb-238a-428d-aa60-2d3941e52710",
                          "name": "Weekly Events",
                          "link": null,
                          "value": 4.75,
                          "children": [
                              {
                                  "id": "1b303b5f-d3fe-458c-8661-04de27bc2da7",
                                  "parent": "77586b81-ff10-44ea-959f-a5b73a52706e",
                                  "name": "Daily Standup",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=MWIzNjk4bWs4dHFhNWhjZmw5OW5sbmthbmxfMjAyMzExMjdUMTgwMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 0.75,
                                  "children": []
                              },
                              {
                                  "id": "3264c302-3389-4629-a164-e79174bbe34f",
                                  "parent": "77586b81-ff10-44ea-959f-a5b73a52706e",
                                  "name": "Voleyball: manuelc@bluetrailsoft.com, manuelchavezreynoso@gmail.com ...",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=M3VuN202ampucDU5dTNxc2YwZmxnbmIydTdfMjAyMzExMjhUMDIwMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 2,
                                  "children": []
                              },
                              {
                                  "id": "4f9ed73a-1483-4d5b-ada0-7d0ed55ceb9d",
                                  "parent": "77586b81-ff10-44ea-959f-a5b73a52706e",
                                  "name": "Voleyball: manuelc@bluetrailsoft.com, manuelchavezreynoso@gmail.com ...",
                                  "link": "https://www.google.com/calendar/u/manuel@insummary.com/event?eid=M3VuN202ampucDU5dTNxc2YwZmxnbmIydTdfMjAyMzExMjlUMDIwMDAwWiBtYW51ZWxAaW5zdW1tYXJ5LmNvbQ",
                                  "value": 2,
                                  "children": []
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "id": "2",
          "parent": "",
          "name": "Unscheduled",
          "value": 28.25,
          "color": "rgba(0, 0, 0, .1)",
          "children": []
      }
  ]
}
root.render(
  <React.StrictMode>
    <App data= {data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
