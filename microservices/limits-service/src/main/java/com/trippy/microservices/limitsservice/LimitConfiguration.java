package com.trippy.microservices.limitsservice;

public class LimitConfiguration {
    private int maximum;
    private int minimum;


    protected LimitConfiguration() {
    }

    public LimitConfiguration(int maximum, int minimum) {
        super();
        this.maximum = maximum;
        this.minimum = minimum;
    }

    public int getMaximum() {
        return this.maximum;
    }

    public void setMaximum(int maximum) {
        this.maximum = maximum;
    }

    public int getMinimum() {
        return this.minimum;
    }

    public void setMinimum(int minimum) {
        this.minimum = minimum;
    }

}
