function temperatureConversion(temperature, fromScale, toScale){
    isValidNumber(temperature);

    fromScale = fromScale.toUpperCase();
    toScale = toScale.toUpperCase();

    if (fromScale === toScale) {
        return temperature; 
    }

    switch (fromScale + " to " + toScale) {
        case "C to F":
            return toFahrenheit(temperature, fromScale);
        case "C to K":
            return toKelvin(temperature,fromScale)
        case "F to C":
            return toCelsius(temperature, fromScale)
        case "F to K":
            return toKelvin(temperature, fromScale)
        case "K to C":
            return toCelsius(temperature, fromScale)
        case "K to F":
            return toFahrenheit(temperature,fromScale);
        default:
            throw new Error("Unexpected conversion case");
    }
}

const isValidNumber = (number) => {
    if (number === null | undefined | isNaN(Number(number))) {
        throw new Error("Not a valid number to convert")
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
            throw new Error("Not valid conversion type");
        }
    }
}

export default temperatureConversion;
