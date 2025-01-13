function temperatureConversion(temperature, fromScale, toScale){
    isValidNumber(temperature);

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();
    
    if (toScale && fromScale === "C" || "F" || "K") {
        if (fromScale === "F" && toScale === "C") {
            return toCelsius(temperature, fromScale)
        } else if (fromScale === "C" && toScale === "F") {
            return toFahrenheit(temperature, fromScale);
        } else if (fromScale === "C" && toScale === "K") {
            return toKelvin(temperature, fromScale)
        } else if (fromScale === "F" && toScale === "K") {
            return toKelvin(temperature, fromScale)
        } else if (fromScale === "K" && toScale === "F") {
            return toFahrenheit(temperature, fromScale)
        } else if (fromScale === "K" && toScale ==="C") {
            return toCelsius(temperature, fromScale)
        } else if (fromScale === toScale) {
            return temperature
        } else {
            throw new Error("invalid conversion");
        }
    }

}

const isValidNumber = (number) => {
    if (number === null | undefined | isNaN(Number(number))) {
        throw new Error("not a valid number")
    }
    number = Number(number)
}

const toFahrenheit = (temperature, fromScale)  => {
    isValidNumber(temperature);
    if (fromScale === "K") {
       return (temperature - 273.15) * (9 / 5) + 32
    } else {
    return (temperature * (9 / 5)) + 32 
}
}

const toCelsius = (temperature, fromScale) => {
    isValidNumber(temperature);
    if (fromScale === "K") {
        return temperature - 273.15
    } else {
    return (temperature - 32) / (9 / 5)
    }
}

const toKelvin = (temperature, fromScale)  => {
    isValidNumber(temperature);
    if (fromScale === "C" || "F") {
        if (fromScale === "C") {
            return temperature + 273.15;
        } else if (fromScale === "F") {
            return (temperature - 32) * (5 / 9) + 273.15
        } else {
            throw new Error("not convertible");
        }
    }
}


export default temperatureConversion;
