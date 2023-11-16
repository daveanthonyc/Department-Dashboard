export const data = [
    {
      "id": "Special Department",
      "color": "#5569ff",
      "data": [
        {
          "x": "10-1",
          "y": 31
        },
        {
          "x": "10-2",
          "y": 34
        },
        {
          "x": "10-3",
          "y": 41
        },
        {
          "x": "10-4",
          "y": 29   
        },
        {
          "x": "11-1",
          "y": 34
        },
        {
          "x": "11-2",
          "y": 37
        },
        {
          "x": "11-3",
          "y": 41
        },
      ]
    },
  ]

export const averageAttendance = Math.round(data[0].data.reduce((prev, acc) => {
    return acc.y + prev;
}, 0)/(data[0].data.length));