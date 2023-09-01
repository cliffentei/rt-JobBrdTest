data.records.forEach((e) => {
    htmlString += `<div class="job-listing-card" style="border:1.5px solid black; min-width:1000px;max-width:fit-content; margin: 25px; ">
    <div class="job-title-wrapper" style=" margin-right:20px; margin-left: 20px; display:block;">
        <div class="post-date-div" style="margin-left: 20px;  font-size: 18px;">
            <p>${e.fields["Date Added"]}</p>
        </div>
        <div class="job-title-div">
            <p>${e.fields["Job Title"]}</p>
        </div>
    </div>
    <div class="dept-div" style="margin-right:20px; margin-left: 20px; max-width: 800px; margin-left: 100px; margin-right: 100px;">
        <p style="font-weight:700px;">Department/Team: </p>
        <br/>
        <span style="font-weight:normal;">${e.fields["Department/Team"]}</span>
    </div>
    <div class="job-spec-div" style="display:flex; justify-content: space-around; margin-right: 20px; margin-left: 20px; padding-bottom: 15px;">
        <div class="job-company-div">
            <p>${e.fields["Company/Org"]}</p>
        </div>
        <div class="job-location-div">
            <p>${e.fields["Location"]}</p>
        </div>
        <div class="job-type-div">
            <div class="job-type-wrapper">
                <p class='job-type'>${e.fields["Type"]? e.fields["Type"].join(", ") : "N/A"}</p>
            </div>
        </div>
    </div>
    <div class="job-desc-div" style="display:flex; justify-content: center;">
        <div class="job-req-holder" style="padding-bottom: 10px;">
            <div class="exp-sal-div" style="display:flex; justify-content: space-between; width: 800px; padding-bottom: 5px;">
                <p>Experience Level:</p>
                <span>${e.fields["Experience Level"]}</span>
                <div class="sal">
                    <p>${e.fields["Salary copy"] ||"No Salary Listed"}</p>
                </div>
            </div>
            <div class="reg-visa-div" style="display: flex; justify-content: space-between; padding-bottom: 10px; width: 800px;">
                <div class="region-div">
                    <p class="region-label" style="font-weight: 700;">Region: </p>
                    <span class="region-wrapper" style="background-color: rgb(124,55,239, .3); padding: 4px;">${e.fields["Region"]? e.fields["Region"].join(", ") : "N/A"}</span>
                </div>
                <div class="visa-div">
                    <p class="visa-label" style="font-weight: 700;">Visa Sponsorship: </p>
                    <span style="background-color: rgb(255,190,0, .3); padding:4px;">${e.fields["Visa sponsorship"]}</span>
                </div>
        </div>
    </div>
    <div class="job-field-div" style="padding-bottom: 10px; margin-left: 40px; margin-right: 40px;">
        <div class="field-label">
            <p style="font-weight: 700;">Field(s): </p>
        </div>
        <div class="tag-field">
            <div class="tag" style="background-color:rgb(0,189,255, .3); margin: 3px; padding: 4px;">
                <p>${e.fields["Field"]}</p>
            </div>
        </div>
    </div>
    <div class="closing-date-div" style="margin-left: 20px;">
        <p style="font-weight:700;">${e.fields["Closing Date"]}</p>
    </div>
    <div class="btn-div" style="border: 0.5px solid black;
    padding: 13px 15px;
    cursor: pointer;
    background-size: 100% 200%;
    background-image: linear-gradient(to top, black 50%, rgba(0,0,0,0) 50%);
    transition: all 0.3s ease;
    white-space: nowrap;">
        <button style="border: 0.5px solid black;
        padding: 13px 15px;
        cursor: pointer;
        background-size: 100% 200%;
        background-image: linear-gradient(to top, black 50%, rgba(0,0,0,0) 50%);
        transition: all 0.3s ease;
        white-space: nowrap;">
            Apply
        </button>
    </div>
</div>`;        
                });

//////////////////

