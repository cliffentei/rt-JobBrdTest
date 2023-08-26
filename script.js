let offset = 0;
        let offsetArray = [''];
        function buttons(input) {
            if (!input) return '';
            const regex = /\[APPLY\]\((.*?)\)/g;
            const matches = [];
            let match;
            while ((match = regex.exec(input)) !== null) {
                matches.push(match[1]);
            }
            let b = ''
            if (matches.length === 1) {
                return `<a href="${matches[0]}" target="_blank"><button>Apply</button></a>`
            }
            for (let i = 0; i < matches.length; i++) {
                b += `<a href="${matches[i]}" target="_blank"><button>Apply (${i + 1})</button></a>`
            }
            return b;
        }
        // function fields(input) {
        //     if (!input) return '';
        //     let b = ''
        //     for (l of input) {
        //         b += `<div class="tag-one-div" > <p>${l}</p></div>`
        //     }
        //     return b;
        // }
        function fields(input) {
            if (!input) return '';
            let b = ''
            for (l of input) {
                b += `<div class="field-div" > <p>${l}</p></div>`
            }
            return b;
        }

        function openModal(jobDetails) {
            console.log(jobDetails)
            const modal = document.getElementById('myModal');
            const modalContent = modal.querySelector('.modal-content');

            // Clear any previous content
            modalContent.innerHTML = '';

            // Populate modal content with job details
            // Modify this part to include the job details you want to show
            modalContent.innerHTML = `
            <div class="modal-header">
                <span class="close">&times;</span>
                <h2 style='margin:5px;'>${jobDetails['Job Title']}</h2>
                <hr/>
            </div>
            <div class="modal-body">
                <p><strong>Company/Org:</strong> ${jobDetails['Company/Org']}</p>
                <p><strong>Experience Level:</strong> ${jobDetails['Experience Level']}</p>
                <div>
                    <p style='font-weight: bold; '>Fields:</p>
                    <div style='margin-top: 3px' class='outer-field-div'>${fields(jobDetails["Field"]) || ''}</div>
                </div>
            </div>
            `;

            modal.style.display = 'block';

            const closeBtn = modal.querySelector('.close');
            closeBtn.onclick = function () {
                modal.style.display = 'none';
            };
        }



        function fetchAllData() {
            let url = `https://api.airtable.com/v0/apprdsx9uO4l5FieL/Table%201?view=Responsible%20Tech%20Job%20Board&maxRecords=500&pageSize=100&offset=`;
            if (offsetArray[offset]) {
                url += offsetArray[offset]
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
                    if (data.offset && !offsetArray[offset + 1]) {
                        offsetArray.push(data.offset)
                    }
                    // console.log(data.records)
                    let htmlString = '';
                    data.records.forEach((e) => {
                        htmlString +=
                            `<div class='job-card'>
                                <div>
                                <p class='job-title'>${e.fields['Job Title']}</p>
                                <hr/>
                                <p class='job-type'>${e.fields["Type"] ? e.fields["Type"].join(', ') : 'N/A'}</p>
                                <p class='salary'>${e.fields['Salary copy'] || 'No Salary Listed'}</p>
                                </div>
                                <div class='info-div'>
                                    <div>
                                        <p class='list-title'>Company: </p>
                                        <p style='margin: 0 0 8px 30px; width: 50%'>${e.fields['Company/Org']}</p>
                                    </div>
                                    <div>
                                        <p class='list-title'>Experience Level: </p>
                                        <p style='margin: 0 0 8px 30px; width: 50%'>${e.fields["Experience Level"]}</p>
                                    </div>
                                </div>
                                <div class="read-more">
                                    <button class="read-more-button">Read More</button>
                                </div>
                            </div>`
                        // htmlString += `<div class="job-listing-card" style="background-color: white; border: 2px solid black;"><div class="job-title-div"><div class="job-post-date" style="margin-left: 20px; font-size: 18px;"><p>${e.fields['Date Added'] || ''}</p></div><div class="job-title-div"><p>${e.fields['Job Title'] || ''}</p></div><div class="job-info-div"><div class="job-company-div"><p>${e.fields["Company/Org"] || ''}</p></div><div class="job-location-div"><p>${e.fields["Location"] || ''}</p></div><div class="job-type-div"><div class="job-type-wrapper"><p>${e.fields["Type"] ? e.fields["Type"].join(', ') : 'N/A'}</p></div></div></div></div><div class="job-desc-div"><div class="dept-div"><p style="font-weight: 700;">Department/Team: <span style="font-weight: normal;">${e.fields["Department/Team"] || ''}</span></p></div><div class="exp-sal-div"><p style="font-weight: 700;">Experience Level: <span style="font-weight: normal;">${e.fields["Experience Level"] || ''}</span></p><div class="sal"><p>${e.fields["Salary"] || ''}</p></div></div><div class="reg-visa-div"><div class="region-wrapper"><p>${e.fields["Region"] ? e.fields["Region"].join(', ') : 'N/A'}</p></div></div><div class="sponsorship-div"><div class="visa-label"><p>Visa Sponsorship: <span>${e.fields["VISA sponsorship"] || ''}</span></p></div></div></div><div class="tag-field"><div class="field-label"><p>Field(s): </p></div><div class="tag-field">${fields(e.fields["Field"]) || ''}</div><div class="closing-date"><p>${e.fields['Closing Date'] || ''}</p></div></div><div>${buttons(e.fields['Link to Apply']) || ''}</div></div>`
                    })
                    // htmlString = `<div><p>hi</p></div>`
                    htmlString = '<div id="toDelete" class="card-holder">' + htmlString + '</div>';
                    const parser = new DOMParser();
                    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
                    const parsedElement = parsedHtml.querySelector('div');
                    const targetElement = document.getElementById('targetElement');
                    targetElement.appendChild(parsedElement);
                    const readMoreButtons = document.querySelectorAll('.read-more-button');
                    readMoreButtons.forEach((button, index) => {
                        button.addEventListener('click', () => {
                            openModal(data.records[index].fields); // Pass the job details to your openModal function
                        });
                    });
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
        fetchAllData();
        function increase() {
            offset++
            document.getElementById('toDelete').remove();
            fetchAllData();
        }
        function decrease() {
            if (offset > 0) offset--
            document.getElementById('toDelete').remove();
            fetchAllData();
        }

        // function submitButton(e){
        //     e.preventDefault()
        //     console.log("Thank you")
        // }

        document.addEventListener("DOMContentLoaded", function () {
            const searchForm = document.getElementById("search-form");

            if (searchForm) {
                searchForm.addEventListener("submit", function (event) {
                    event.preventDefault();

                    const searchInput = document.getElementById("search-input").value;
                    console.log("Search query:", searchInput);
                });
            }
        });
