function attachEvents() {

    // Write a program that requests a weather report from a server and displays it to the user.
    // Use the skeleton from the provided resources.

    let divForecastRef = document.getElementById("forecast");
    let inputLocationFieldRef = document.getElementById("location");
    let innerDivCurrentRef = document.getElementById("current");
    let innerDivUpcomingRef = document.getElementById("upcoming");
    let symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    }
    let errorEl = create("h1", ["error"], "Error");



    // When the user writes the name of a location and clicks “Get Weather”,
    // make a GET request to the server at address http://localhost:3030/jsonstore/forecaster/locations. 
    let getWeatherBtnRef = document.getElementById("submit");
    getWeatherBtnRef.addEventListener("click", getWeatherBtnFn);
    async function getWeatherBtnFn(event) {

        // ако има друга заредена прогноза, я изтриваме
        if (innerDivCurrentRef.querySelectorAll("div").length > 1) {
            innerDivCurrentRef.removeChild(innerDivCurrentRef.querySelector("div:nth-of-type(2)"));
            innerDivUpcomingRef.removeChild(innerDivUpcomingRef.querySelector(".forecast-info"));
        }

        let response = await fetch('http://localhost:3030/jsonstore/forecaster/locations');

        // If an error occurs (the server doesn’t respond or the location name cannot be found) 
        // or the data is not in the correct format, display "Error" in the forecast section.
        if (!response) {
            divForecastRef.style.display = "block";
            divForecastRef.appendChild(errorEl);
            return;
        } else {
            // ако сървъра връша отговор, но имаме заредена грешка от предишно търсене, я зачистваме 
            divForecastRef.style.display = "none";
            if (divForecastRef.querySelector('.error')) {
                divForecastRef.removeChild(divForecastRef.querySelector('.error'));
            }
        }


        // The response will be an array of objects, with the following structure:
        //     {
        //         name: locationName,
        //             code: locationCode
        //     }
        let data = await response.json();
        data.forEach(async (loc) => {

            // Find the object, corresponding to the name that the user submitted in the input field
            // with ID "location" and use its code value to make two more GET requests:
            if (inputLocationFieldRef.value.toLowerCase() == loc.name.toLowerCase()) {

                // Use the information from these two objects to compose a forecast in HTML and insert it inside the page. 

                // •	For current conditions, make a request to:
                // http://localhost:3030/jsonstore/forecaster/today/:code
                // The response from the server will be an object with the following structure:
                // { 
                //   name: locationName,
                //   forecast: { low: temp,
                //               high: temp,
                //               condition: condition } 
                // }
                let todayData = await (await fetch(`http://localhost:3030/jsonstore/forecaster/today/${loc.code}`)).json();

                let divForecastsEl = create("div", ["forecasts"]);
                let spanSymbolEl = create("span", ["condition", "symbol"], symbols[todayData.forecast.condition]);
                let spanConditionContainerEl = create("span", ["condition"]);
                let spanNameEl = create("span", ["forecast-data"], todayData.name);
                let spanDegreesEl = create("span", ["forecast-data"], `${todayData.forecast.low}${symbols["Degrees"]}/${todayData.forecast.high}${symbols["Degrees"]}`);
                let spanConditionEl = create("span", ["forecast-data"], todayData.forecast.condition);

                spanConditionContainerEl.appendChild(spanNameEl);
                spanConditionContainerEl.appendChild(spanDegreesEl);
                spanConditionContainerEl.appendChild(spanConditionEl);

                divForecastsEl.appendChild(spanSymbolEl);
                divForecastsEl.appendChild(spanConditionContainerEl);

                innerDivCurrentRef.appendChild(divForecastsEl);


                // •	For a 3-day forecast, make a request to:
                // http://localhost:3030/jsonstore/forecaster/upcoming/:code
                // The response from the server will be an object with the following structure:
                // {
                //   name: locationName,
                //   forecast: [{ low: temp,
                //                high: temp,
                //                condition: condition }, … ]
                // }
                let upcomingData = await (await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${loc.code}`)).json();
                let upcomingInfoDivEl = create("div", ["forecast-info"]);

                upcomingData.forecast.forEach(day => {
                    let spanUpcomingEl = create("span", ["upcoming"]);

                    let spanSymbolEl = create("span", ["symbol"], symbols[day.condition]);
                    let spanDegreesEl = create("span", ["forecast-data"], `${day.low}${symbols["Degrees"]}/${day.high}${symbols["Degrees"]}`);
                    let spanConditionEl = create("span", ["forecast-data"], day.condition);

                    spanUpcomingEl.appendChild(spanSymbolEl);
                    spanUpcomingEl.appendChild(spanDegreesEl);
                    spanUpcomingEl.appendChild(spanConditionEl);

                    upcomingInfoDivEl.appendChild(spanUpcomingEl);

                });
                innerDivUpcomingRef.appendChild(upcomingInfoDivEl);

                // ако има заредена грешка от предишно търсене, я изтриваме
                if (divForecastRef.querySelector('.error')) {
                    divForecastRef.removeChild(divForecastRef.querySelector('.error'));
                }
                // Note that the <div> with ID "forecast" must be set to visible. See the examples for details. 
                divForecastRef.style.display = "block";
            } else {
                // ако града, който търсим, не съшествува в базата данни, зареждаме грешка 
                divForecastRef.style.display = "block";
                    divForecastRef.appendChild(errorEl);
            }
        });

    }

    function create(tag, classes = [], content) {
        let el = document.createElement(tag);
        if (classes) {
            classes.forEach(x => el.classList.add(x));
        }
        if (content) {
            el.innerHTML = content;
        }
        return el;
    }
}

attachEvents();

