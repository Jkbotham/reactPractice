import React from "react";

export default {
  windDirection: (wd) => {
    if (wd < 0 || wd > 360) {
      return;
    }
    if (wd >= 0 && wd <= 11.25) {
      return "N";
    }
    if (wd > 348.75 && wd <= 360) {
      return "N";
    }
    if (wd > 11.25 && wd <= 33.75) {
      return "NNE";
    }
    if (wd > 33.75 && wd <= 56.25) {
      return "NE";
    }
    if (wd > 56.25 && wd <= 78.75) {
      return "ENE";
    }
    if (wd > 78.75 && wd <= 101.25) {
      return "E";
    }
    if (wd > 101.25 && wd <= 123.75) {
      return "ESE";
    }
    if (wd > 123.75 && wd <= 146.25) {
      return "SE";
    }
    if (wd > 146.25 && wd <= 168.75) {
      return "SSE";
    }
    if (wd > 168.75 && wd <= 191.25) {
      return "S";
    }
    if (wd > 191.25 && wd <= 213.75) {
      return "SSW";
    }
    if (wd > 213.75 && wd <= 236.25) {
      return "SW";
    }
    if (wd > 236.25 && wd <= 258.75) {
      return "WSW";
    }
    if (wd > 258.75 && wd <= 281.25) {
      return "W";
    }
    if (wd > 281.25 && wd <= 303.75) {
      return "WNW";
    }
    if (wd > 303.75 && wd <= 326.25) {
      return "NW";
    }
    if (wd > 326.25 && wd <= 348.75) {
      return "NNW";
    }
  },

  capitalize: (input) => {
    const words = input.split(" ");
    const CapitalizedWords = [];
    words.forEach((obj) => {
      CapitalizedWords.push(obj[0].toUpperCase() + obj.slice(1, obj.length));
    });
    return CapitalizedWords.join(" ");
  },

  getTime: (time) => {
    const dt = new Date(time * 1000);
    // const hr = dt.getHours();
    // const m = "0" + dt.getMinutes();
    // const s = "0" + dt.getSeconds();
    // const date = dt.getDate();
    // return date + " " + hr + ":" + m.substr(-2) + ":" + s.substr(-2);
    return dt.toLocaleString("en-us", { hour: "numeric" });
  },
  getDate: (time) => {
    const dt = new Date(time * 1000);
    return dt.toLocaleString("en-US", { weekday: "short" });
  },

  weatherIcon: (icon, size) => {
    if (size === "large") {
      return "https://openweathermap.org/img/wn/" + icon + "@4x.png";
    } else {
      return "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    }
  },

  temp: (temp) => {
    return temp.toFixed() + "°";
  },

  pop: (pop) => {
    const percent = pop * 100;
    return (
      <p>
        <i className="fas fa-tint"></i> {percent.toFixed()}%
      </p>
    );
  },
};
