function resolutionName(weight, height) {

    if (weight >= 7680 && height >= 4320) {
        return "8K";
    } else if (weight >= 3840 && height >= 2160) {
        return "4K";
    } else if (weight >= 2560 && height >= 1440) {
        return "WQHD";
    } else if (weight >= 1920 && height >= 1080) {
        return "FHD";
    } else if (weight >= 1280 && height >= 720) {
        return "HD";
    } else {
        return false
    }
}

let resName = resolutionName(1280, 720);
console.log(resName);