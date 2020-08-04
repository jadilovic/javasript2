package com.avlija.javascript2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @RequestMapping(value={"/", "/index"}, method = RequestMethod.GET)
    public ModelAndView adminPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    }
    
    @RequestMapping(value={"/hex"}, method = RequestMethod.GET)
    public ModelAndView hexPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("hex");
        return modelAndView;
    }
    
    @RequestMapping(value={"/index2"}, method = RequestMethod.GET)
    public ModelAndView index2Page(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index2");
        return modelAndView;
    }
    
    
    @RequestMapping(value={"/index3"}, method = RequestMethod.GET)
    public ModelAndView index3Page(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index3");
        return modelAndView;
    }
}