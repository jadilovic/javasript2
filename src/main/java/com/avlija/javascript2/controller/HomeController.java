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
    
    @RequestMapping(value={"/condition"}, method = RequestMethod.GET)
    public ModelAndView hexPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("condition");
        return modelAndView;
    }
    
    @RequestMapping(value={"/story"}, method = RequestMethod.GET)
    public ModelAndView index2Page(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("story");
        return modelAndView;
    }
    
    
    @RequestMapping(value={"/game"}, method = RequestMethod.GET)
    public ModelAndView index3Page(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("game");
        return modelAndView;
    }
    
    @RequestMapping(value={"/functions"}, method = RequestMethod.GET)
    public ModelAndView functionsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("functions");
        return modelAndView;
    }
    
    @RequestMapping(value={"/validation"}, method = RequestMethod.GET)
    public ModelAndView validPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("validation");
        return modelAndView;
    }
    
    @RequestMapping(value={"/event"}, method = RequestMethod.GET)
    public ModelAndView eventPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("event");
        return modelAndView;
    }
    
    @RequestMapping(value={"/galery"}, method = RequestMethod.GET)
    public ModelAndView galeryPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("galery");
        return modelAndView;
    }
    
    
    @RequestMapping(value={"/oojs"}, method = RequestMethod.GET)
    public ModelAndView oojsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("oojs");
        return modelAndView;
    }
    
    @RequestMapping(value={"/objects"}, method = RequestMethod.GET)
    public ModelAndView objectsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("objects");
        return modelAndView;
    }
    
    @RequestMapping(value={"/jsontest"}, method = RequestMethod.GET)
    public ModelAndView jsonPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("JSONTest");
        return modelAndView;
    }
    
    @RequestMapping(value={"/balls"}, method = RequestMethod.GET)
    public ModelAndView ballsPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("balls");
        return modelAndView;
    }
}