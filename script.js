document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementsByClassName("search-bar-container")[0]
    .addEventListener("click", function () {
      document.getElementById("search-input").focus();
    });
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

  const searchInputs = document.getElementById("search-input");
  const clearIcon = document.querySelector(".clear-icon");

  function formatSalary(salary) {
    if (typeof salary !== "number") {
      return "No Salary Listed";
    }
    const salaryString = salary.toString();
    const [integerPart, decimalPart] = salaryString.split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    let formattedSalary = "$" + formattedIntegerPart;
    if (decimalPart) {
      formattedSalary += "." + decimalPart;
    }
    return formattedSalary;
  }

  searchInputs.addEventListener("keyup", function () {
    const inputValue = this.value.trim();
    if (inputValue.length > 0) {
      clearIcon.style.display = "block";
    } else {
      clearIcon.style.display = "none";
    }
  });

  clearIcon.addEventListener("click", function () {
    searchInputs.value = "";
    clearIcon.style.display = "none";
    fetchAllData();
  });

  const dropdownData = {
    dropdown1: [],
    dropdown2: [
      "Remote",
      "United States",
      "Europe",
      "United Kingdom",
      "Africa",
      "Asia",
      "Canada",
      "South America",
      "Central America",
      "Middle East",
      "Australia/New Zealand",
    ],
    dropdown3: ["Yes", "No", "In some cases"],
    dropdown4: [],
    dropdown5: [],
    dropdown6: ["Part-Time", "Full-Time", "Contract/Term"],
    dropdown7: [
      "Less than $30,000",
      "$30,000 - $50,000",
      "$50,000 - $75,000",
      "$75,000 - $100,000",
      "$100,000 - $150,000",
      "$150,000 - $200,000",
      "$200,000 - $300,000",
      "$300,000 - $500,000",
      "Over $500,000",
    ],
    dropdown8: [
      "1 Day Ago",
      "3 Days Ago",
      "7 Days Ago",
      "14 Days Ago",
      "30 Days Ago",
    ],
  };

  const apiKey =
    "patNamJqXdDlueUxM.6e6e7f9efc1e8ab27056891e8f3c51c97bf2f994036cc554fb9618143bc58c31";

  let timeoutId;
  const dotSpinner = document.querySelector(".newtons-cradle");

  async function fetchAPI(url) {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  async function fetchTableRecords(tableName, offset = null) {
    const baseId = "apprdsx9uO4l5FieL";
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}?view=MAIN+-+Grid+view${offset ? `&offset=${offset}` : ""}`;
    return fetchAPI(url);
  }

  async function fetchTableRecordsWithOffset(tableName) {
    let allRecords = [];
    let offset = null;
    do {
      const { records, offset: newOffset } = await fetchTableRecords(
        tableName,
        offset
      );
      allRecords = allRecords.concat(records);
      offset = newOffset;
    } while (offset);
    return allRecords;
  }

  async function fetchFilterOptions() {
    const companyUniqueValues = new Set();
    const fetchedCompanies = await fetchTableRecordsWithOffset("Table 1");
    fetchedCompanies.forEach((record) => {
      const value = record.fields["Company/Org"];
      if (value !== undefined) {
        companyUniqueValues.add(value.trimStart());
      }
    });
    const companyUniqueArray = Array.from(companyUniqueValues).sort((a, b) =>
      a.localeCompare(b)
    );
    dropdownData["dropdown1"] = companyUniqueArray;

    const uniqueExperiences = [];
    const fetchedExperiences = await fetchTableRecordsWithOffset("Experience");
    fetchedExperiences.forEach((record) => {
      const value = record.fields["Experiences"];
      if (value !== undefined) {
        uniqueExperiences.push(value.trimStart());
      }
    });
    dropdownData["dropdown4"] = uniqueExperiences;

    const uniqueFields = [];
    const fetchedFields = await fetchTableRecordsWithOffset("Field");
    fetchedFields.forEach((record) => {
      const value = record.fields["Fields"];
      if (value !== undefined) {
        uniqueFields.push(value.trimStart());
      }
    });
    dropdownData["dropdown5"] = uniqueFields;

    renderDropdowns();
  }

  fetchFilterOptions();

  function renderDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const dropdownButton = dropdown.querySelector(".dropdown-button");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");
      const dropdownId = dropdown.id;

      dropdownData[dropdownId].forEach((optionText) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("dropdown-option");
        optionElement.innerHTML = `
          <input type="checkbox" class="dropdown-option-checkbox">
          <span>${optionText}</span>
        `;
        dropdownMenu.appendChild(optionElement);
        const checkbox = optionElement.querySelector(
          ".dropdown-option-checkbox"
        );
        checkbox.addEventListener("click", function (event) {
          event.stopPropagation();
          updateButtonState();
        });
        optionElement.addEventListener("click", function (event) {
          checkbox.checked = !checkbox.checked;
          optionElement.classList.toggle("selected");
          updateButtonState();
          event.preventDefault();
          decreaseBtn.classList.remove("show");
          decreaseBtn2.classList.remove("show");
          increaseBtn.classList.remove("show");
          increaseBtn2.classList.remove("show");
          const deleteMe = document.getElementById("toDelete");
          if (deleteMe) deleteMe.remove();
          clearTimeout(timeoutId);
          dotSpinner.classList.remove("hidden");
          timeoutId = setTimeout(() => {
            fetchAllData();
            dotSpinner.classList.add("hidden");
          }, 1000);
        });
      });

      dropdownButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");
      });
      const dropdownButtons = document.querySelectorAll(".dropdown-button");

      dropdownButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const dropdownMenus = document.querySelectorAll(".dropdown-menu");
          const clickedMenu = button.nextElementSibling;
          dropdownMenus.forEach((menu) => {
            if (menu !== clickedMenu) {
              menu.classList.remove("active");
            }
          });
          clickedMenu.classList.toggle("active");
        });
      });

      document.addEventListener("click", function (event) {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        const dropdownButtons = document.querySelectorAll(".dropdown-button");
        let isInsideDropdown = false;
        dropdownMenus.forEach((dropdownMenu) => {
          if (dropdownMenu.contains(event.target)) {
            isInsideDropdown = true;
          }
        });
        dropdownButtons.forEach((dropdownButton) => {
          if (dropdownButton.contains(event.target)) {
            isInsideDropdown = true;
          }
        });
        if (!isInsideDropdown) {
          dropdownMenus.forEach((dropdownMenu) => {
            dropdownMenu.classList.remove("active");
          });
        }
      });

      updateButtonState();
    });
  }

  function updateButtonState() {
    const selectedOptions = document.querySelectorAll(
      ".dropdown-option.selected"
    );
    selectedOptions.forEach((option) => {
      option.querySelector(".dropdown-option-checkbox").checked = true;
    });

    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    dropdownButtons.forEach((button) => {
      const dropdownMenu = button.nextElementSibling;
      button.classList.toggle(
        "selected",
        dropdownMenu.querySelector(".dropdown-option.selected")
      );
    });
    document.addEventListener("click", function (event) {
      const dropdownMenus = document.querySelectorAll(".dropdown-menu");
      const dropdownButtons = document.querySelectorAll(".dropdown-button");
      let isInsideDropdown = false;
      dropdownMenus.forEach((dropdownMenu) => {
        if (dropdownMenu.contains(event.target)) {
          isInsideDropdown = true;
        }
      });
      dropdownButtons.forEach((dropdownButton) => {
        if (dropdownButton.contains(event.target)) {
          isInsideDropdown = true;
        }
      });
      if (!isInsideDropdown) {
        dropdownMenus.forEach((dropdownMenu) => {
          dropdownMenu.classList.remove("active");
        });
      }
    });
  }

  function buttons(input) {
    if (!input) return "";
    const regex = /\bhttps?:\/\/\S+/gi;
    const matches = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
      matches.push(match[0]);
    }
    let b = "";
    if (matches.length === 1) {
      return `<a href="${matches[0]}" target="_blank" style='text-decoration: none;'><div class='apply-btn'><p>Apply<p></div></a>`;
    }
    for (let i = 0; i < matches.length; i++) {
      b += `<a href="${matches[i]
        }" target="_blank" style='text-decoration: none;'><div class='apply-btn'>Apply (${i + 1
        })</div></a>`;
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

  let offset = 0;
  let offsetArray = [""];
  let globalUrl = "";
  let offsetKey = "&offset=";

  const increaseBtn = document.querySelector(".increase");
  const increaseBtn2 = document.querySelector(".increase2");
  const decreaseBtn = document.querySelector(".decrease");
  const decreaseBtn2 = document.querySelector(".decrease2");

  clearTimeout(timeoutId);
  dotSpinner.classList.remove("hidden");
  timeoutId = setTimeout(() => {
    fetchAllData();
    dotSpinner.classList.add("hidden");
  }, 1000);

  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", function (event) {
    event.preventDefault();
    const deleteMe = document.getElementById("toDelete");
    if (deleteMe) deleteMe.remove();
    clearTimeout(timeoutId);
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
  });

  function getFilterFormula(options) {
    const daysAgoMapping = {
      "1 Day Ago": 1,
      "3 Days Ago": 3,
      "7 Days Ago": 7,
      "14 Days Ago": 14,
      "30 Days Ago": 30,
    };

    let max = -Infinity;

    options.forEach((e) => {
      if (daysAgoMapping[e] > max) {
        max = daysAgoMapping[e];
      }
    });

    return `DATETIME_DIFF(TODAY(), {Created}, 'days') <= ${max}`;
  }

  function generateSalaryFilterFormula(options) {
    const formulaParts = [];

    options.forEach((option) => {
      let lowerBound = 0;
      let upperBound = 0;

      if (option === "Less than $30,000") {
        formulaParts.push(`AND({Max Salary (USD)} <= 30000)`);
      } else if (option === "Over $500,000") {
        formulaParts.push(`AND({Max Salary (USD)} > 500000)`);
      } else {
        const rangeMatch = option.match(/\$([\d,]+) - \$([\d,]+)/);
        if (rangeMatch) {
          lowerBound = parseInt(rangeMatch[1].replace(/,/g, ""), 10);
          upperBound = parseInt(rangeMatch[2].replace(/,/g, ""), 10);
        }
        formulaParts.push(
          `AND({Max Salary (USD)} >= ${lowerBound}, {Max Salary (USD)} <= ${upperBound})`
        );
      }
    });

    return `OR(${formulaParts.join(", ")})`;
  }
  function urlCreator(s) {
    const baseUrl = "https://api.airtable.com/v0/apprdsx9uO4l5FieL/Table%201?";
    const pageSize = "pageSize=100";
    const sort = `sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc`;
    let filterFunction = "filterByFormula=";
    const filters = [];
    const dropdownName = {
      dropdown1: "Company/Org",
      dropdown2: "Region",
      dropdown3: "Visa sponsorship",
      dropdown4: "Experience Level",
      dropdown5: "Field",
      dropdown6: "Type",
      dropdown7: "Max Salary (USD)",
      dropdown8: "Created",
    };

    for (const f in s) {
      if (f === "searchInput") {
        const searchTerms = s[f].toLowerCase().split(" ");
        const searchConditions = searchTerms.map(
          (term) => `SEARCH("${term}", {Concat})`
        );
        filters.push(`AND(${searchConditions.join(",")})`);
      } else if (f === "dropdown7" && s[f].length) {
        filters.push(generateSalaryFilterFormula(s[f]));
      } else if (f === "dropdown8" && s[f].length) {
        filters.push(getFilterFormula(s[f]));
      } else if (s[f].length) {
        filters.push(
          `OR(${s[f]
            .map((e) => `SEARCH('${e}', {${dropdownName[f]}})`)
            .join(",")})`
        );
      }
    }

    filterFunction += `${encodeURIComponent("AND(" + filters.join(",") + ")")}`;
    return baseUrl + [pageSize, sort, filterFunction].join("&");
  }

  function fetchAllData() {
    const selectedOptions = {
      dropdown1: [],
      dropdown2: [],
      dropdown3: [],
      dropdown4: [],
      dropdown5: [],
      dropdown6: [],
      dropdown7: [],
      dropdown8: [],
      searchInput: "",
    };

    selectedOptions.searchInput = document.getElementById("search-input").value;

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      const dropdownId = dropdown.id;
      const selectedOptionElements = dropdown.querySelectorAll(
        ".dropdown-option.selected"
      );

      selectedOptionElements.forEach((optionElement) => {
        const optionText = optionElement.querySelector("span").textContent;
        selectedOptions[dropdownId].push(optionText);
      });
    });
    let url = urlCreator(selectedOptions);
    console.log(url);
    let newOffset = "&offset=" + offsetArray[offset];
    if (document.getElementById("toDelete"))
      document.getElementById("toDelete").remove();

    if (url !== globalUrl || (url === globalUrl && offsetKey === newOffset)) {
      offset = 0;
      offsetArray = [""];
      setCards(url);
      offsetKey = "&offset=";
      globalUrl = url;
    } else if (url === globalUrl && offsetKey !== newOffset) {
      setCards(url + newOffset);
      offsetKey = newOffset;
    }

    async function setCards(newUrl) {
      fetch(newUrl, {
        headers: {
          Authorization: `Bearer patNamJqXdDlueUxM.6e6e7f9efc1e8ab27056891e8f3c51c97bf2f994036cc554fb9618143bc58c31`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.records.forEach((record) => {
            const createdDate = new Date(record.fields.Created);
            const options = { year: "numeric", month: "long", day: "numeric" };
            const formattedDate = createdDate.toLocaleDateString(
              undefined,
              options
            );
            record.fields.Created = formattedDate;
          });
          if (data.offset && !offsetArray[offset + 1]) {
            offsetArray.push(data.offset);
          }
          if (data.offset && !offsetArray[offset + 1]) {
            offsetArray.push(data.offset);
          }

          if (offset === 0 && offsetArray.length > 1) {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.add("show");
            increaseBtn2.classList.add("show");
          } else if (
            offsetArray[offset + 1] !== undefined &&
            offsetArray[offset - 1] !== undefined
          ) {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.add("show");
            decreaseBtn2.classList.add("show");
            increaseBtn.classList.add("show");
            increaseBtn2.classList.add("show");
          } else if (
            offsetArray[offset - 1] !== undefined &&
            offsetArray[offset + 1] === undefined
          ) {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.add("show");
            decreaseBtn2.classList.add("show");
          } else {
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
            decreaseBtn.classList.remove("show");
            decreaseBtn2.classList.remove("show");
            increaseBtn.classList.remove("show");
            increaseBtn2.classList.remove("show");
          }
          let htmlString = "";
          if (data.records.length > 0) {
            data.records.forEach((e) => {
              const minSalaryFormatted = formatSalary(
                e.fields["Min Salary (USD)"]
              );
              const maxSalaryFormatted = formatSalary(
                e.fields["Max Salary (USD)"]
              );
              // htmlString += `
              //   <div class="job-listing-card loading-effect">
              //       <div class='card-header'>
              //           <p style="font-family: 'Caprasimo', cursive; font-size:35px;">${
              //             e.fields["Job Title"]
              //           }</p>
              //           <p style="font-size: 20px;">Date Posted: ${
              //             e.fields["Created"]
              //           }</p>
              //       </div>
              //       <div class="job-field-div" style="padding-bottom: 10px;">
              //           <div class="tag-field">
              //               ${fields(e.fields["Field"]) || ""}
              //           </div>
              //       </div>
              //       <div class="job-spec-div">
              //           <div class="job-spec">
              //               <p class="job-spec-title">Company/Org:</p>
              //               <p class='job-type'>${e.fields["Company/Org"]}</p>
              //           </div>
              //           <div class='vertical-hr'></div>
              //           <div class="job-spec">
              //               <p class="job-spec-title">Location:</p>
              //               <p class='job-type'>${e.fields["Location"]}</p>
              //           </div>
              //           <div class='vertical-hr'></div>
              //           <div class="job-spec">
              //               <p class="job-spec-title">Type:</p>
              //               <p class='job-type'>${
              //                 e.fields["Type"]
              //                   ? e.fields["Type"].join(", ")
              //                   : "N/A"
              //               }</p>
              //           </div>
              //       </div>
              //       <div class="job-desc-div" style="width: 100%">
              //           <div class="job-req-holder" style="padding-bottom: 10px;">
              //               <div class="exp-sal-div"
              //                   style="display:flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 5px;">
              //                   <p style='font-size: 25px; font-weight: bold'>Department/Team:
              //                       <span style='font-size: 25px; font-weight: normal'>${
              //                         e.fields["Department/Team"] ||
              //                         "No Team Listed"
              //                       }</span>
              //                   </p>
              //                   <p style='font-size: 25px; font-weight: bold'>Salary: <span
              //                           style='font-size: 25px; font-weight: normal'>${
              //                             e.fields["Salary"] ||
              //                             "No Salary Listed"
              //                           }</span></p>

              //               </div>
              //               <div class="min-max-div" style="display: flex; justify-content:space-between; flex-wrap: wrap;">
              //                   <p style='font-size: 25px; font-weight: bold' class="visa-label">Visa Sponsorship:
              //                       <span style='font-size: 25px; font-weight: normal'>${
              //                         e.fields["VISA sponsorship"]
              //                           ? e.fields["VISA sponsorship"].join(
              //                               ", "
              //                             )
              //                           : "N/A"
              //                       }</span>
              //                   </p>
              //                   <p style='font-size: 25px; font-weight: bold' class="min-sal-label">Minimum Salary:
              //                       <span style='font-size: 25px; font-weight: normal'>
              //                           ${minSalaryFormatted}
              //                       </span>
              //                   </p>
              //               </div>
              //               <div class="exp-sal-div"
              //                   style="display:flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 5px;">
              //                   <p style='font-size: 25px; font-weight: bold'>Experience Level:
              //                       <span style='font-size: 25px; font-weight: normal'>${
              //                         e.fields["Experience Level"] &&
              //                         e.fields["Experience Level"].length
              //                           ? e.fields["Experience Level"].join(
              //                               ", "
              //                             )
              //                           : e.fields["Experience Level"]
              //                           ? e.fields["Experience Level"]
              //                           : "No Experience Listed"
              //                       }</span>
              //                   </p>
              //                   <p style='font-size: 25px; font-weight: bold' class="max-sal-label">Maximum Salary:
              //                       <span style='font-size: 25px; font-weight: normal'>
              //                           ${maxSalaryFormatted}
              //                       </span>
              //                   </p>
              //               </div>
              //               <div class="reg-visa-div" style="display: flex; justify-content:space-between; flex-wrap: wrap;">
              //                   <p style='font-size: 25px; font-weight: bold' class="region-label">Region:
              //                       <span style='font-size: 25px; font-weight: normal'>${
              //                         e.fields["Region"]
              //                           ? e.fields["Region"].join(", ")
              //                           : "N/A"
              //                       }</span>
              //                   </p>
              //                   <p style='font-size: 25px; font-weight: bold'>Closing Date: <span
              //                           style='font-size: 25px; font-weight: normal'>${
              //                             e.fields["Closing Date"]
              //                           }</span></p>
              //               </div>
              //           </div>
              //       </div>
              //       <div style="display:flex; justify-content: center;">
              //           <div class='apply-div'>
              //               ${buttons(e.fields["Link to Apply"]) || ""}
              //           </div>
              //       </div>
              //   </div>
              // `;
              htmlString += `
                <div class='grid-card'>
                <p>${e.fields["Job Title"]}</p>
                </div>
              `;
            });
          } else {
            htmlString += `<h1 class="title">No Results Found</h1>`;
          }
          htmlString =
            '<div id="toDelete" class="card-holder">' + htmlString + "</div>";
          const parser = new DOMParser();
          const parsedHtml = parser.parseFromString(htmlString, "text/html");
          const parsedElement = parsedHtml.querySelector("div");
          const targetElement = document.getElementById("targetElement");
          targetElement.appendChild(parsedElement);
          const readMoreButtons = document.querySelectorAll(".grid-card");
          readMoreButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
              openModal(data.records[index].fields); // Pass the job details to your openModal function
            });
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }

  function openModal(e) {
    const modal = document.getElementById("myModal");
    const modalHeader = modal.querySelector(".modal-header");
    const modalFooter = modal.querySelector(".modal-footer");
    const modalContent = modal.querySelector(".modal-content");
    modalHeader.innerHTML = `<span style='font-size: 50px; margin: 0 0 0 auto;' class="close">&times;</span>
    <div class='card-header'>
        <p style="font-family: 'Caprasimo', cursive; font-size:35px;">${e["Job Title"]
      }</p>
        <p style="font-size: 20px;">Date Posted: ${e["Created"]}</p>
    </div>`;
    modalContent.innerHTML = "";
    modalContent.innerHTML = `
    <div class="job-field-div" style="padding-bottom: 10px;">
        <div class="tag-field">
            ${fields(e["Field"]) || ""}
        </div>
    </div>
      <div class="job-spec-div">
          <div class="job-spec">
              <p class="job-spec-title">Company/Org:</p>
              <p class='job-type'>${e["Company/Org"]}</p>
          </div>
          <div class='vertical-hr'></div>
          <div class="job-spec">
              <p class="job-spec-title">Location:</p>
              <p class='job-type'>${e["Location"]}</p>
          </div>
          <div class='vertical-hr'></div>
          <div class="job-spec">
              <p class="job-spec-title">Type:</p>
              <p class='job-type'>${e["Type"] ? e["Type"].join(", ") : "N/A"
      }</p>
          </div>
      </div>
      <div class="job-desc-div" style="width: 100%">
          <div class="job-req-holder" style="padding-bottom: 10px;">
              <div class="exp-sal-div"
                  style="display:flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 5px;">
                  <p style='font-size: 25px; font-weight: bold'>Department/Team:
                      <span style='font-size: 25px; font-weight: normal'>${e["Department/Team"] || "No Team Listed"
      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold'>Salary: <span style='font-size: 25px; font-weight: normal'>${e["Salary"] || "No Salary Listed"
      }</span></p>
                        
              </div>
              <div class="min-max-div" style="display: flex; justify-content:space-between; flex-wrap: wrap;">
                  <p style='font-size: 25px; font-weight: bold' class="visa-label">Visa Sponsorship:
                      <span style='font-size: 25px; font-weight: normal'>${e["VISA sponsorship"]
        ? e["VISA sponsorship"].join(", ")
        : "N/A"
      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold' class="min-sal-label">Minimum Salary:
                      <span style='font-size: 25px; font-weight: normal'>
                          ${"ds" || minSalaryFormatted}
                      </span>
                  </p>
              </div>
              <div class="exp-sal-div"
                  style="display:flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 5px;">
                  <p style='font-size: 25px; font-weight: bold'>Experience Level:
                      <span style='font-size: 25px; font-weight: normal'>${e["Experience Level"] && e["Experience Level"].length
        ? e["Experience Level"].join(", ")
        : e["Experience Level"]
          ? e["Experience Level"]
          : "No Experience Listed"
      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold' class="max-sal-label">Maximum Salary:
                      <span style='font-size: 25px; font-weight: normal'>
                          ${"ds" || maxSalaryFormatted}
                      </span>
                  </p>
              </div>
              <div class="reg-visa-div" style="display: flex; justify-content:space-between; flex-wrap: wrap;">
                  <p style='font-size: 25px; font-weight: bold' class="region-label">Region:
                      <span style='font-size: 25px; font-weight: normal'>${e["Region"] ? e["Region"].join(", ") : "N/A"
      }</span>
                  </p>
                  <p style='font-size: 25px; font-weight: bold'>Closing Date: <span
                          style='font-size: 25px; font-weight: normal'>${e["Closing Date"]
      }</span></p>
              </div>
          </div>
      </div>`;
    modalFooter.innerHTML = `
      <div class='apply-div'>
          ${buttons(e["Link to Apply"]) || ""}
      </div>`
    console.log(e["Link to Apply"])
    modal.style.display = "flex";

    const closeBtn = modal.querySelector(".close");
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  }

  function increase() {
    offset++;
    document.getElementById("toDelete").remove();
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    clearTimeout(timeoutId);
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
  }

  function decrease() {
    if (offset > 0) offset--;
    document.getElementById("toDelete").remove();
    decreaseBtn.classList.remove("show");
    decreaseBtn2.classList.remove("show");
    increaseBtn.classList.remove("show");
    increaseBtn2.classList.remove("show");
    clearTimeout(timeoutId);
    dotSpinner.classList.remove("hidden");
    timeoutId = setTimeout(() => {
      fetchAllData();
      dotSpinner.classList.add("hidden");
    }, 1000);
  }

  increaseBtn.addEventListener("click", increase);
  increaseBtn2.addEventListener("click", increase);
  decreaseBtn.addEventListener("click", decrease);
  decreaseBtn2.addEventListener("click", decrease);
});
