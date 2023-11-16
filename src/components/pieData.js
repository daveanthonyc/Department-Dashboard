
const pastMonthData = [
  {
    week: "10-4",
    total: 42,
    offline: 29,
    online: 10,
    absentee: 3,
  },
  {
    week: "11-1",
    total: 42,
    offline: 34,
    online: 4,
    absentee: 4,
  },
  {
    week: "11-2",
    total: 42,
    offline: 37,
    online: 3,
    absentee: 2,
  },
  {
    week: "11-3",
    total: 42,
    offline: 41,
    online: 1,
    absentee: 0,
  },
]

export const totals = pastMonthData.reduce((prev, current) => {
  return prev + current.total;
}, 0)/pastMonthData.length

export const offlines = pastMonthData.reduce((prev, current) => {
  return prev + current.offline;
}, 0)/pastMonthData.length

export const onlines = pastMonthData.reduce((prev, current) => {
  return prev + current.online;
}, 0)/pastMonthData.length

export const absentees = pastMonthData.reduce((prev, current) => {
  return prev + current.absentee;
}, 0)/pastMonthData.length

export const pieData = [
    {
      "id": "Offline",
      "label": "Offline",
      "value": offlines,
      "color": "rgb(87, 202, 34)"
    },
    {
      "id": "Online",
      "label": "Online",
      "value": onlines,
      "color": "#5569ff"
    },
    {
      "id": "Absentee",
      "label": "Absentee",
      "value": absentees,
      "color": "rgb(255, 25, 67)"
    },
  ]