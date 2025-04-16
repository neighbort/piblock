import pigpio

def set_gpio_default():
    pi = pigpio.pi()

    #pin_low = [22, 27, 10, 17, 13, 23, 24, 25, 12]
    pin_low = [17, 27, 22, 10, 9, 11, 13, 19, 26, 18, 23, 24, 25, 12, 16, 20, 21]
    for pin in pin_low:
        print(pin)
        pi.set_mode(pin, pigpio.INPUT)
        pi.set_pull_up_down(pin, pigpio.PUD_DOWN)

    #pin_high = [3, 2]
    pin_high = [2, 3, 4, 5, 6, 14, 15, 8, 7]
    for pin in pin_high:
        print(pin)
        pi.set_mode(pin, pigpio.INPUT)
        pi.set_pull_up_down(pin, pigpio.PUD_UP)

    pi.stop()


if "__name__" == "__main__":
    set_gpio_default()
