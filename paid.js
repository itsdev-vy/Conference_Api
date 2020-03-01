const Api =
  "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";

window
  .fetch(Api)
  .then(data => {
    data
      .json()
      .then(demo => {
        for (let paid of demo.paid) {
          var output =
            output +
            `
           <div class = "container">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">POSTER</th>
                        <th scope="col">DATE</th>
                        <th scope="col">CONFERENCE</th>
                        <th scope="col">ENTRY TYPE</th>
                        <th scope="col">PLACE</th>
                        <th scope="col">WEBSITE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                         <td><img style="width:100px;
                    height:100px;
                    border-radius:100%" src="${paid.imageURL}"/></td>
                        <td>${paid.confStartDate}</td>
                        <td>${paid.confName}</td>
                        <td>${paid.entryType}</td>
                        <td>${paid.city}</td>
                        <td><a href="${paid.confUrl}">Link</a></td>
                    </tr>
                </tbody>
            </table>
           </div>
            `;
          document.getElementById("template2").innerHTML = output;
        }
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
