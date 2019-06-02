// Getters and Setters

enum FanMode{
    Off,
    Low,
    High
}


class Fan {
    private currentFanMode: FanMode = FanMode.Off;
    
    get fanMode(): FanMode{
        return this.currentFanMode;
    }

    set fanMode(value: FanMode){
        this.currentFanMode = value;
    }
}