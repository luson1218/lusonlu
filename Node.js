// JavaScript Document
app.get('/api/data', (req, res) => {
  res.json({
    time: ["10:00", "10:05", "10:10"],
    temp: [25, 26, 27]
  });
});