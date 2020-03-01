const Url =
  "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";

window
  .fetch(Url)
  .then(data => {
    data
      .json()
      .then(demo => {
        for (let free of demo.free) {
          var output =
            output +
            `
           <div class = "container">
            <table class="table table-dark" id="myTable">
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
                    border-radius:100%" src="${free.imageURL}"/></td>
                        <td>${free.confStartDate}</td>
                        <td>${free.confName}</td>
                        <td>${free.entryType}</td>
                        <td>${free.city}</td>
                        <td><a href="${free.confUrl}">Link</a></td>
                    </tr>
                </tbody>
            </table>
           </div>
            `;
          document.getElementById("template1").innerHTML = output;
        }
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
