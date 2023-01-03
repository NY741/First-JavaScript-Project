// create empty array to push items afterwards

const calculationArr = []; 

// add event listener by submitting the form

document.getElementById("main__form").addEventListener("submit", calculateSum);

// create table rows including all values

const createTableRow = ({ deposit, amount, interest, term, calculation }) => {
  return `  
        <tr>
            <td>${deposit}</td>
            <td>${amount}</td>
            <td>${interest}</td>
            <td>${term}</td>
            <td>${calculation}</td>
        </tr>
    `;
}; 

// create calculator function

function calculateSum(event) { 

  event.preventDefault(); // prevent page reload on click

  let fields = {}; // create empty object with fields

  var formData = new FormData(event.target);

  for (var pair of formData.entries()) {
    fields[pair[0]] = pair[1];
  }

  // create variable storing the calculation formula

  const sum = Number( 
    +fields.deposit +
    +(fields.deposit * (fields.interest / 100) * (fields.term / 360)) +
    +(fields.amount*fields.term/30)
  );

  // return the error block if any provided data is not a (positive) number (default - display: none)

  if (Number.isNaN(sum) || 
  typeof sum !== "number" || 
  fields.deposit <= 0 ||
  fields.interest <= 0 ||
  fields.term <= 0 ||
  fields.amount < 0) {
    console.log("Error: Provided data is not a Positive Number !");
    document.getElementById("alert").style.display = "block";
    return;
  }

  // remove error alert after resubmitting

  document.getElementById("alert").style.display = "none";

  // leave only two numbers after dot in the result

  fields.calculation = sum.toFixed(2);

  calculationArr.push(fields);

  event.target.reset();

  console.log("calculationArr", calculationArr);

  let allRows = ``;

  calculationArr.forEach((row) => {
    allRows += createTableRow({ ...row });
  });

  document.getElementById("tbody").innerHTML = allRows;
  
  return fields;
}
































//                     <select name="month" id="month">
  //                     <option value="6">6 месяцев</option>
  //                     <option value="9">9 месяцев</option>
  //                     <option value="12">1 год</option>
  //                     <option value="18">1.5 года</option>
  //                     <option value="24">2 года</option>
  //                     <option value="30">2.5 года</option>
  //                     <option value="36">3 года</option>
  //                     <option value="48">4 года</option>
  //                     <option value="60">5 лет</option>
//                     </select>