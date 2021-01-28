package com.trippy.microservices.limitsservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LimitsConfigurationController {

    @Autowired
    private Configuration cfg;

    @GetMapping("/limits")
    public LimitConfiguration retrieveLimitsFromConfigurations(){
        return new LimitConfiguration(cfg.getMaximum(),cfg.getMinimum());
    }
    
}
