while True: 
    print("light_level:"+ input.light_level())
    if input.light_level() < 5: 
        light.set_all(light.rgb(255,0,255))
    else:
        light.clear()    