class Task {
  constructor(title, description, color, startDate, status, budget) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.startDate = startDate;
    this.status = status;
    this.budget = budget;

    this.name = "Andy";
  }
}

// $.ajax({
//     type: "POST",
//     url: "http://fsdiapi.azurewebsites.net/api/tasks/",
//     data: JSON.stringify(taskToSave),
//     contentType: "application/json",
//     success: function(res){
//       console.log(res);
//     },
//     error: function(error) {
//     console.log(error);
//     }
//   })

// let syntax = `<div class='task'>
// <div class='info'>
// <h5>${task.title}</h5>
// <p>${task.description}</p>
// </div>
// <label>${task.status}</label>
// <div class='date-budget'>
// <label>${task.startDate}</label>
// <label>${task.budget}</label>
// </div>
// </div>`;
