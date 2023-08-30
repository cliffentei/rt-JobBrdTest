document.addEventListener("DOMContentLoaded", function () {
  const dropdownData = {
    dropdown1: ["Hi", "Luis", "Oshaun"],
    // dropdown2: ["Hola", "Saida", "India"],
    dropdown2: ["Remote", "United States", "Europe", "United Kingdom", "Africa", "Asia", "Canada", "South America", "Central America", "Middle East", "Australia/New Zealand"],
    dropdown3: ["Yes", "No"],
    dropdown4: ["5-6 Years", "3-4 Years", "Executive/Director", "0-2 Years", "Early Career", "Mid-Senior", "10+ Years", "7-9 Years", "PostDoc/Fellowship/Residency", "Academia", "Ph.D.", "Internship", "Volunteer", "Grant/Award", "15+ Years"],
    dropdown5: [], // To be populated from fetched data
    dropdown6: ["Part-Time", "Full-Time", "Contract/Term"],
  };

  const apiKey = 'patNamJqXdDlueUxM.6e6e7f9efc1e8ab27056891e8f3c51c97bf2f994036cc554fb9618143bc58c31'
  // const tableName = 'Table 1';
  const columnName = 'Field';

  const endpoint = `https://api.airtable.com/v0/apprdsx9uO4l5FieL/Table%201?fields%5B%5D=${columnName}`;
  const uniqueValues = new Set();

  const companyNameColumn = 'Company/Org';
  const companyEndpoint = `https://api.airtable.com/v0/apprdsx9uO4l5FieL/Table%201?fields%5B%5D=${companyNameColumn}`;
  const companyUniqueValues = new Set();

  fetch(companyEndpoint, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
    .then(response => response.json())
    .then(data => {
      data.records.forEach(record => {
        const value = record.fields[companyNameColumn];
        if (value !== undefined) {
          companyUniqueValues.add(value);
        }
      });

      const companyUniqueArray = Array.from(companyUniqueValues);
      dropdownData['dropdown1'] = companyUniqueArray;

      // After fetching and populating 'Company/Org' data, now fetch 'Field' data
      fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
        .then(response => response.json())
        .then(data => {
          const fieldUniqueValues = new Set();

          data.records.forEach(record => {
            const value = record.fields[columnName];
            if (value !== undefined) {
              fieldUniqueValues.add(...value);
            }
          });

          const fieldUniqueArray = Array.from(fieldUniqueValues);
          dropdownData['dropdown5'] = fieldUniqueArray;

          renderDropdowns();
        })
        .catch(error => console.error('Error fetching data:', error));
    })
    .catch(error => console.error('Error fetching data:', error));

  function renderDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
      const dropdownButton = dropdown.querySelector(".dropdown-button");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");
      const dropdownId = dropdown.id;

      dropdownData[dropdownId].forEach(optionText => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("dropdown-option");
        optionElement.innerHTML = `
          <input type="checkbox" class="dropdown-option-checkbox">
          <span>${optionText}</span>
        `;
        dropdownMenu.appendChild(optionElement);

        const checkbox = optionElement.querySelector(".dropdown-option-checkbox");
        checkbox.addEventListener("click", function (event) {
          event.stopPropagation();
          updateButtonState();
        });

        optionElement.addEventListener("click", function () {
          checkbox.checked = !checkbox.checked;
          optionElement.classList.toggle("selected");
          updateButtonState();
        });
      });

      dropdownButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");
      });

      updateButtonState();
    });
  }

  function updateButtonState() {
    const selectedOptions = document.querySelectorAll(".dropdown-option.selected");
    selectedOptions.forEach(option => {
      option.querySelector(".dropdown-option-checkbox").checked = true;
    });

    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    dropdownButtons.forEach(button => {
      const dropdownMenu = button.nextElementSibling;
      button.classList.toggle("selected", dropdownMenu.querySelector(".dropdown-option.selected"));
    });
    displaySelectedOptions();
  }

  function displaySelectedOptions() {
    const selectedOptions = [];

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
      const dropdownId = dropdown.id;
      const selectedOptionElements = dropdown.querySelectorAll(".dropdown-option.selected");

      selectedOptionElements.forEach(optionElement => {
        const optionText = optionElement.querySelector("span").textContent;
        selectedOptions.push({
          dropdownId: dropdownId,
          option: optionText
        });
      });
    });

    console.log("Selected Options:", selectedOptions);
  }




  let offset = 0;
  let offsetArray = [""];

  let prop = { searchTerm: "" };
  let clone = { searchTerm: "" };

  const increaseBtn = document.querySelector("#increase");
  const decreaseBtn = document.querySelector("#decrease");

  //   let prop = { searchTerm: "" };
  fetchAllData(prop);

  function buttons(input) {
    if (!input) return "";
    const regex = /\[APPLY\]\((.*?)\)/g;
    const matches = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
      matches.push(match[1]);
    }
    let b = "";
    if (matches.length === 1) {
      return `<a href="${matches[0]}" target="_blank"><button class='apply-btn'>Apply</button></a>`;
    }
    for (let i = 0; i < matches.length; i++) {
      b += `<a href="${matches[i]}" target="_blank"><button class='apply-btn'>Apply (${i + 1
        })</button></a>`;
    }
    return b;
  }

  function fields(input) {
    if (!input) return "";
    let b = "";
    for (l of input) {
      b += `<div class="field-div" > <p>${l}</p></div>`;
    }
    return b;
  }

  function openModal(jobDetails) {
    const modal = document.getElementById("myModal");
    const modalContent = modal.querySelector(".modal-content");
    console.log(jobDetails)
    modalContent.innerHTML = "";
    modalContent.innerHTML = `
              <div class="modal-header">
              <div style='display: flex; justify-content: space-between; width: 100%; align-items: center'>                  
                  <h2 class='modal-title'>${jobDetails["Job Title"]}</h2>
                  <span style='font-size: 50px; margin: 0 0 0 auto;' class="close">&times;</span>
                  </div>
                  <hr/>
              </div>
                  <div class="modal-body">
                      <h3>${jobDetails["Region"]
        ? `<strong>Location:</strong> <br> <span style='font-size: 15px; font-weight: normal'>${jobDetails["Region"].join(", ")}</span>`
        : "N/A"
      }</h3>
                  <h3><strong>Company/Org: </strong> <br><span style='font-size: 15px; font-weight: normal'>${jobDetails["Company/Org"]
      }</span></h3>
                  <h3><strong>Experience Level: </strong> <br><span style='font-size: 15px; font-weight: normal'>${jobDetails["Experience Level"].join(", ")
      }</span></h3>
                  <h3><strong>Salary: </strong> <br><span style='font-size: 15px; font-weight: normal'>${jobDetails["Salary copy"] || 'No Salary Listed'
      }</span></h3>
                  <h3><strong>Deadline: </strong> <br><span style='font-size: 15px; font-weight: normal'>${jobDetails["Closing Date"] || 'No Deadline Listed'
      }</span></h3>
                  <div>
                      <p style='font-weight: bold; margin: 0;'>Fields:</p>
                      <div style='margin-top: 3px' class='outer-field-div'>${fields(jobDetails["Field"]) || ""
      }</div>
                  </div>
                  <div class='apply-div'>
                    ${buttons(jobDetails['Link to Apply']) || ''}
                  </div>
              </div>
              `;

    modal.style.display = "flex";

    const closeBtn = modal.querySelector(".close");
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  const searchForm = document.getElementById("search-form");

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchInput = document.getElementById("search-input").value;
      prop.searchTerm = searchInput;
      fetchAllData(prop);
    });
  }

  function fetchAllData(prop) {
    let url = `https://api.airtable.com/v0/apprdsx9uO4l5FieL/Table%201?view=Responsible%20Tech%20Job%20Board&maxRecords=500&pageSize=100&filterByFormula=AND(`;
    if (document.getElementById("toDelete")) {
      document.getElementById("toDelete").remove();
    }

    const dropdownName = {
      dropdown1: "Company/Org",
      dropdown2: "Region",
      dropdown3: "Visa",
      dropdown4: "Experience",
      dropdown5: "Field",
      dropdown6: "Type"
    }
    const selectedOptions = [];

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
      const dropdownId = dropdown.id;
      const selectedOptionElements = dropdown.querySelectorAll(".dropdown-option.selected");

      selectedOptionElements.forEach(optionElement => {
        const optionText = optionElement.querySelector("span").textContent;
        selectedOptions.push({
          dropdownId: dropdownId,
          option: optionText
        });
      });
    });

    console.log("Selected Options:", selectedOptions);

    

    if (prop.searchTerm !== "") {
      if (JSON.stringify(prop) !== JSON.stringify(clone)) {
        offset = 0;
        offsetArray = [""];
      }
      const searchTerms = prop.searchTerm.toLowerCase().split(" ");
      const searchConditions = searchTerms.map(
        (term) => `SEARCH("${term}", {Concat})`
      );
      clone = JSON.parse(JSON.stringify(prop));

      if (searchConditions.length === 1) {
        url += searchConditions[0] + ")";
      } else {
        url += `AND(${searchConditions.join(",")}))`;
      }
    } else {
      url += `)`;
    }

    url += `&offset=`;

    console.log(offset, offsetArray);

    if (offsetArray[offset]) {
      url += offsetArray[offset];
    } else if (offset >= offsetArray.length) {
      url += offsetArray[offsetArray.length - 1];
      offset = offsetArray.length - 1;
    }

    fetch(url, {
      headers: {
        Authorization: `Bearer patNamJqXdDlueUxM.6e6e7f9efc1e8ab27056891e8f3c51c97bf2f994036cc554fb9618143bc58c31`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(url);
        if (data.offset && !offsetArray[offset + 1]) {
          offsetArray.push(data.offset);
        }

        if (offset === 0 && offsetArray.length > 1) {
          decreaseBtn.classList.remove("hide");
          increaseBtn.classList.remove("hide");
          decreaseBtn.classList.add("hide");
          increaseBtn.classList.remove("hide");
        } else if (
          offsetArray[offset + 1] !== undefined &&
          offsetArray[offset - 1] !== undefined
        ) {
          decreaseBtn.classList.remove("hide");
          increaseBtn.classList.remove("hide");
        } else if (
          offsetArray[offset - 1] !== undefined &&
          offsetArray[offset + 1] === undefined
        ) {
          decreaseBtn.classList.remove("hide");
          increaseBtn.classList.remove("hide");
          decreaseBtn.classList.remove("hide");
          increaseBtn.classList.add("hide");
        } else {
          decreaseBtn.classList.remove("hide");
          increaseBtn.classList.remove("hide");
          decreaseBtn.classList.add("hide");
          increaseBtn.classList.add("hide");
        }
        let htmlString = "";
        data.records.forEach((e) => {
          htmlString += `<div class='job-card'>
                                  <div>
                                  <p class='job-title'>${e.fields["Job Title"]
            }</p>
                                  <hr/>
                                  <p class='job-type'>${e.fields["Type"]
              ? e.fields["Type"].join(", ")
              : "N/A"
            }</p>
                                  <p class='salary'>${e.fields["Salary copy"] || "No Salary Listed"
            }</p>
                                  <p class='region'>${e.fields["Region"]
              ? e.fields["Region"].join(", ")
              : "N/A"
            }</p>
                                  </div>
                                  <div class='info-div'>
                                      <div>
                                          <p class='list-title'>Location: </p>
                                          <p style='margin: 0 0 8px 30px; width: 50%'>${e.fields["Location"]
            }</p>
                                      </div>
                                      <div>
                                          <p class='list-title'>Company: </p>
                                          <p style='margin: 0 0 8px 30px; width: 50%'>${e.fields["Company/Org"]
            }</p>
                                      </div>
                                      <div>
                                          <p class='list-title'>Experience Level: </p>
                                          <p style='margin: 0 0 8px 30px; width: 50%'>${e.fields["Experience Level"]
            }</p>
                                      </div>
                                  </div>
                                  <div class="read-more">
                                      <button class="read-more-button">Read More</button>
                                  </div>
                              </div>`;
          // htmlString += `<div class="job-listing-card" style="background-color: white; border: 2px solid black;"><div class="job-title-div"><div class="job-post-date" style="margin-left: 20px; font-size: 18px;"><p>${e.fields['Date Added'] || ''}</p></div><div class="job-title-div"><p>${e.fields['Job Title'] || ''}</p></div><div class="job-info-div"><div class="job-company-div"><p>${e.fields["Company/Org"] || ''}</p></div><div class="job-location-div"><p>${e.fields["Location"] || ''}</p></div><div class="job-type-div"><div class="job-type-wrapper"><p>${e.fields["Type"] ? e.fields["Type"].join(', ') : 'N/A'}</p></div></div></div></div><div class="job-desc-div"><div class="dept-div"><p style="font-weight: 700;">Department/Team: <span style="font-weight: normal;">${e.fields["Department/Team"] || ''}</span></p></div><div class="exp-sal-div"><p style="font-weight: 700;">Experience Level: <span style="font-weight: normal;">${e.fields["Experience Level"] || ''}</span></p><div class="sal"><p>${e.fields["Salary"] || ''}</p></div></div><div class="reg-visa-div"><div class="region-wrapper"><p>${e.fields["Region"] ? e.fields["Region"].join(', ') : 'N/A'}</p></div></div><div class="sponsorship-div"><div class="visa-label"><p>Visa Sponsorship: <span>${e.fields["VISA sponsorship"] || ''}</span></p></div></div></div><div class="tag-field"><div class="field-label"><p>Field(s): </p></div><div class="tag-field">${fields(e.fields["Field"]) || ''}</div><div class="closing-date"><p>${e.fields['Closing Date'] || ''}</p></div></div><div>${buttons(e.fields['Link to Apply']) || ''}</div></div>`
        });
        htmlString =
          '<div id="toDelete" class="card-holder">' + htmlString + "</div>";
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(htmlString, "text/html");
        const parsedElement = parsedHtml.querySelector("div");
        const targetElement = document.getElementById("targetElement");
        targetElement.appendChild(parsedElement);
        const readMoreButtons = document.querySelectorAll(".read-more-button");
        readMoreButtons.forEach((button, index) => {
          button.addEventListener("click", () => {
            openModal(data.records[index].fields); // Pass the job details to your openModal function
          });
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
  function increase() {
    offset++;
    document.getElementById("toDelete").remove();
    fetchAllData(prop);
  }
  function decrease() {
    if (offset > 0) offset--;
    document.getElementById("toDelete").remove();
    fetchAllData(prop);
  }

  increaseBtn.addEventListener("click", increase);
  decreaseBtn.addEventListener("click", decrease);
});