$(document).ready( ()=>{
    $.ajax({
      type: "GET",
      url: "https://api.victorsanmartin.com/feriados/en.json",
      success:(data)=>{
        data.data.forEach((date) => {
          $("#feriados").append(
            `<tbody>
                <tr class="bg-success p-2 text-dark bg-opacity-50">
                    <td>${date.date}</td>
                    <td>${date.title}</td>
                    <td>${date.type}</td>
                    <td>${date.inalienable}</td>
                    <td>${date.extra}</td>
                </tr>
              </tbody>`
          );
        });
      }
    });
  });

