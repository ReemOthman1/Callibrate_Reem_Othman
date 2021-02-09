while (true) {
    console.log("light_level:" + input.lightLevel())
    if (input.lightLevel() < 5) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
