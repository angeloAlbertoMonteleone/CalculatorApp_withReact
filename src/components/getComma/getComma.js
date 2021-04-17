const getComma = (value) => {
    let integers = "";
    let decimals = "";
    let isNegative = false;
    if(value === "0") {
        return value;
    }
    if(value.includes(".")) {
        integers = value.substring(0, value.indexOf("."));
        decimals = value.substring(value.indexOf("."));
    }else {
        integers = value;
    }
    
    if(parseFloat(value) < 0) {
        isNegative = true;
        integers = integers.substring(1);
    }

    if(isNegative) {
        return "-" + parseFloat(integers).toLocaleString() + decimals.toLocaleString();
    } else {
        return parseFloat(integers).toLocaleString() + decimals.toLocaleString();
    }
}

export default getComma;