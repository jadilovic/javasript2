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
    
    
    @RequestMapping(value={"/interval"}, method = RequestMethod.GET)
    public ModelAndView intervalPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("interval");
        return modelAndView;
    }
    
    
    @RequestMapping(value={"/animation"}, method = RequestMethod.GET)
    public ModelAndView animationPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("animation");
        return modelAndView;
    }
    
    @RequestMapping(value={"/apis"}, method = RequestMethod.GET)
    public ModelAndView apisPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("apis");
        return modelAndView;
    }
    
    @RequestMapping(value={"/ajax"}, method = RequestMethod.GET)
    public ModelAndView ajaxPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("ajax");
        return modelAndView;
    }
    
    @RequestMapping(value={"/canstore"}, method = RequestMethod.GET)
    public ModelAndView canstorePage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("canstore");
        return modelAndView;
    }
    
    @RequestMapping(value={"/starter"}, method = RequestMethod.GET)
    public ModelAndView starterPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("starter-file");
        return modelAndView;
    }
    
    @RequestMapping(value={"/acanvas"}, method = RequestMethod.GET)
    public ModelAndView acanvasPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("acanvas");
        return modelAndView;
    }
    
    @RequestMapping(value={"/draw"}, method = RequestMethod.GET)
    public ModelAndView drawPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("draw");
        return modelAndView;
    }
    
    @RequestMapping(value={"/cube"}, method = RequestMethod.GET)
    public ModelAndView cubePage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("3Dcube");
        return modelAndView;
    }
    
    @RequestMapping(value={"/media"}, method = RequestMethod.GET)
    public ModelAndView mediaPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("media");
        return modelAndView;
    }
    
    @RequestMapping(value={"/storage"}, method = RequestMethod.GET)
    public ModelAndView storagePage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("storage");
        return modelAndView;
    }
    
    @RequestMapping(value={"/notes"}, method = RequestMethod.GET)
    public ModelAndView notesPage(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("notes");
        return modelAndView;
    }
    
    @RequestMapping(value={"/every"}, method = RequestMethod.GET)
    public ModelAndView everyMethodArrayDemo(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("every");
        return modelAndView;
    }
}