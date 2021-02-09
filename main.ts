while (true) {
    console.log("sound_level:" + input.soundLevel())
    if (input.soundLevel() < 5) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
