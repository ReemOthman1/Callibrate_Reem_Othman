while (true) {
    console.log("sound_level:" + input.soundLevel() + 59.3)
    if (input.soundLevel() + 59.3 < 5) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
