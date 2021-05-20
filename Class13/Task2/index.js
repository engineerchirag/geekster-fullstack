// References:
// - toLocaleString: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// Dependecies: https://www.npmjs.com/package/json-server

(() => {
    let eventList = [
      // {
      //   title: "DOM fundamentals",
      //   dateTime: "Sun May 09 2021 20:00:11 GMT+0530"
      // },
      // {
      //   title: "Building Calendar Class-1",
      //   dateTime: "Sun May 09 2021 21:00:11 GMT+0530"
      // },
      // {
      //   title: "Building Calendar Revision",
      //   dateTime: "Sun May 09 2021 21:44:11 GMT+0530"
      // }
    ];
  
    const currentDate = new Date();
    let activeDate = currentDate.getDate();
    let activeMonth = currentDate.getMonth();
    let activeYear = currentDate.getFullYear();
  
    const renderCurrentDateSection = () => {
      const dateElement = document.getElementsByClassName("num-date")[0];
      const dayElement = document.getElementById("current-day");
      const d = new Date();
      d.setDate(activeDate);
      d.setMonth(activeMonth);
      d.setFullYear(activeYear);
      const currentDay = new Date(d).toLocaleString("default", {
        weekday: "long"
      });
      dateElement.innerHTML = activeDate;
      dayElement.innerHTML = currentDay;
    };
  
    const renderEventList = (limit) => {
      const eventListElement = document.querySelector(".current-events ul");
      eventListElement.innerHTML = "";
      const list = limit ? eventList.slice(0, limit) : eventList.slice();
      list.forEach((event) => {
        const eventElement = document.createElement("li");
        eventElement.innerText = event.title;
        eventListElement.appendChild(eventElement);
      });
      if (!limit) {
        const seeAllPostElement = document.querySelector(".posts");
        seeAllPostElement.classList.add("hide");
      }
    };
  
    const registerLeftSectionEvents = () => {
      // Show all events
      const seeAllPostElement = document.querySelector(".posts");
      seeAllPostElement.addEventListener("click", function (event) {
        renderEventList();
        seeAllPostElement.classList.add("hide");
      });
  
      // Handle show/hide event creation section
      const addEventElement = document.querySelector(".add-event");
      const eventViewContainer = document.querySelector(".calendar-left-view");
      const createEventContainer = document.querySelector(
        ".calendar-event-create"
      );
      addEventElement.addEventListener("click", function (event) {
        createEventContainer.classList.remove("hide");
        eventViewContainer.classList.add("hide");
      });

      const saveEventData =  (newEvent) => {
        const request = new Request('http://localhost:3000/events', {
          method: 'POST',
          body: JSON.stringify(newEvent),
          headers: {
            'Content-Type': 'application/json',
          }
        });
        fetch(request)
          .then(res => res.json())
          .then(data => {
              eventList.push(data);
              // window.location.reload();
              eventViewContainer.classList.remove("hide");
              createEventContainer.classList.add("hide");
              renderEventList();
          })
          
      }

      // Handle event creation
      const submitButton = document.querySelector(".calendar-event-create form");
      submitButton.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(submitButton);
        const newEvent = Array.from(formData.entries()).reduce((acc, item) => {
          acc[item[0]] = item[1];
          return acc;
        }, {});
        saveEventData(newEvent);
      });
  
      // Handle date selection
      const numDatesElement = document.querySelector(".num-dates");
      numDatesElement.addEventListener("click", function (event) {
        if (
          event.target.nodeName === "SPAN" &&
          !event.target.classList.contains("grey")
        ) {
          const numDatesSpanElement = document.querySelectorAll(
            ".num-dates span"
          );
          activeDate = Number(event.target.firstChild.nodeValue);
          numDatesSpanElement.forEach((element) => {
            element.classList.remove("selected-day");
          });
          event.target.classList.add("selected-day");
          renderLeftSection();
        }
      });
  
      // Handle month selection
      const monthsWrapperElement = document.querySelector(".months");
      monthsWrapperElement.addEventListener("click", function (event) {
        if (event.target.nodeName === "SPAN") {
          const monthElements = document.querySelectorAll(".months span");
          monthElements.forEach((element) => {
            element.classList.remove("active-month");
          });
          event.target.classList.add("active-month");
          activeMonth = Number(event.target.getAttribute("data-id"));
          activeDate = 1;
          renderLeftSection();
          renderMonth();
        }
      });
  
      // Change year
      const yearWrapperElement = document.querySelector(".calendar-year");
      yearWrapperElement.addEventListener("click", function (event) {
        if (event.target.nodeName === "SPAN") {
          const yearElement = yearWrapperElement
            .closest(".calendar-year")
            .querySelector(".year");
          activeYear =
            event.target.getAttribute("data-id") === "PREV"
              ? Number(yearElement.innerText) - 1
              : Number(yearElement.innerText) + 1;
          yearElement.innerText = activeYear;
          renderLeftSection();
          renderMonth();
        }
      });
    };
  
    const renderMonth = () => {
      let firstDayOfTheMonth = new Date(activeYear, activeMonth).getDay();
      let daysInMonth = 32 - new Date(activeYear, activeMonth, 32).getDate();
      let daysInPreviousMonth =
        32 - new Date(activeYear, activeMonth - 1, 32).getDate();
      let daysInNextMonth = 42 - (firstDayOfTheMonth + daysInMonth);
      const previousMonthDays = Array(firstDayOfTheMonth)
        .fill()
        .map((data, i) => daysInPreviousMonth - firstDayOfTheMonth + 1 + i);
      const currentMonthDays = Array(daysInMonth)
        .fill()
        .map((data, i) => i + 1);
      const nextMonthDays = Array(daysInNextMonth)
        .fill()
        .map((data, i) => i + 1);
      const monthDays = [
        ...previousMonthDays,
        ...currentMonthDays,
        ...nextMonthDays
      ];
      const numDaysElement = document.querySelector(".num-dates");
      numDaysElement.innerHTML = "";
      let weekElement;
      monthDays.forEach((item, i) => {
        if (i % 7 === 0) {
          weekElement = document.createElement("div");
          weekElement.classList.add("week");
          numDaysElement.appendChild(weekElement);
        }
        const dayElement = document.createElement("span");
        if (i < firstDayOfTheMonth || i >= firstDayOfTheMonth + daysInMonth) {
          dayElement.classList.add("grey");
        }
        if (item === activeDate && !dayElement.classList.contains("grey")) {
          dayElement.classList.add("active-day");
        }
        dayElement.innerHTML = item;
        weekElement.appendChild(dayElement);
      });
    };

    const fetchEventData = () => {
      const request = new Request('http://localhost:3000/events', {
        method: 'GET',
      });
      fetch(request)
        .then((res) => res.json())
        .then(res => {
          eventList = res;
          renderEventList(2);
        })
    }
  
    const renderLeftSection = () => {
      renderCurrentDateSection();
      fetchEventData();
    };
  
    renderLeftSection();
    registerLeftSectionEvents();
    renderMonth();
  })();