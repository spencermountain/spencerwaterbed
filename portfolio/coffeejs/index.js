// Generated by CoffeeScript 1.6.3
var arr;

arr = ["https://s3.amazonaws.com/spencermounta.in/portfolio/libs/jquery.js", "https://s3.amazonaws.com/spencermounta.in/portfolio/libs/oj.js"];

head.js.apply(this, arr);

head(function() {
  var hacks, video_project;
  oj.useGlobally();
  hacks = function() {
    return div({
      style: "position:relative; display:block; height:790px;"
    }, function() {
      div({
        style: "display:block; color:grey; margin:2px; font-size:28px;"
      }, function() {
        return "Hackathon hustling";
      });
      div({
        style: "background-color:steelblue; width:75%; height:2px; margin:5px 10px 5px 10px; left:20px; position:relative;"
      });
      a({
        style: "position:absolute; text-decoration:none; opacity:0.8;",
        href: "https://s3.amazonaws.com/spencermounta.in/portfolio/assets/argmap.png"
      }, function() {
        img({
          style: "width:400px; border:2px solid grey; border-radius:5px;",
          src: "https://s3.amazonaws.com/spencermounta.in/portfolio/assets/argmap_thumb.png"
        });
        div({
          style: "position:absolute; top:65px; left:10px; color:steelblue; font-size:44px;"
        }, function() {
          return "Argument mapping";
        });
        return div({
          style: "position:relative; color:grey; font-size:14px;"
        }, function() {
          return "Freebase Hackday speaker 2009";
        });
      });
      a({
        style: "position:absolute; left:450px; text-decoration:none; opacity:0.8;",
        href: "https://github.com/spencermountain/clooney"
      }, function() {
        img({
          style: "width:300px; border:2px solid grey; border-radius:5px;",
          src: "https://s3.amazonaws.com/spencermounta.in/portfolio/assets/treemap.gif"
        });
        return div({
          style: "position:relative; color:grey; font-size:14px;"
        }, function() {
          return "Famo.us alpha 2014";
        });
      });
      a({
        style: "position:absolute; left:450px; top:350px; text-decoration:none; opacity:0.8;",
        href: "https://chrome.google.com/webstore/detail/townhouse/lkkbklipfdbphchmibeecklgijliafid"
      }, function() {
        img({
          style: "width:300px; border:2px solid grey; border-radius:5px;",
          src: "https://s3.amazonaws.com/spencermounta.in/portfolio/assets/townhouse.png"
        });
        return div({
          style: "position:relative; color:grey; font-size:14px;"
        }, function() {
          return "chrome extension";
        });
      });
      a({
        style: "position:absolute; left:50px; top:400px; text-decoration:none; opacity:0.8;",
        href: "https://github.com/spencermountain/acre_backup/tree/master/unlockldn"
      }, function() {
        img({
          style: "width:280px; border:2px solid grey; border-radius:5px;",
          src: "https://s3.amazonaws.com/spencermounta.in/portfolio/assets/unlockldn.png"
        });
        return div({
          style: "position:relative; color:grey; font-size:14px;"
        }, function() {
          return "UnlockLondon 2014 winner";
        });
      });
      return div({
        style: "position:absolute; top:600px; height:100px; left:150px;"
      }, function() {
        return div({
          style: "padding:40px; width:800px; font-size:45px; color:grey;"
        }, function() {
          span({
            style: "font-size:25px;"
          }, function() {
            return "(curent) ";
          });
          return span(function() {
            return "M.Sc. Queen's University";
          });
        });
      });
    });
  };
  video_project = function(obj) {
    if (obj == null) {
      obj = {};
    }
    return div(function() {
      a({
        style: "display:block; text-decoration:none; color:grey; margin:2px; font-size:28px;",
        href: obj.official
      }, function() {
        return obj.title;
      });
      div({
        style: "background-color:steelblue; width:75%; height:2px; margin:5px 10px 5px 10px; left:20px; position:relative;"
      });
      div({
        style: "color:lightgrey; font-size:20px; margin:2px 2px 8px 10px; left:30px; position:relative;"
      }, function() {
        return obj.headline;
      });
      iframe({
        src: obj.link,
        width: 720,
        height: 400,
        frameborder: 0
      });
      div({
        style: "color:grey; text-align:right; font-size:18px;"
      }, function() {
        return obj.about;
      });
      return div({
        style: "height:60px;"
      });
    });
  };
  return $("#main").oj(div({
    style: "width:800px;"
  }, function() {
    table(function() {
      return tr(function() {
        td({
          style: "width:200px;"
        }, function() {
          return img({
            style: "width:200px;",
            src: "./bio.jpg"
          });
        });
        return td(function() {
          div({
            style: "color:grey; font-size:34px;"
          }, function() {
            return "Spencer Kelly";
          });
          div({
            style: "color:steelblue; font-size:15px;"
          }, function() {
            a({
              style: "color:steelblue;",
              href: "http://blog.state.com/post/51231219164/the-man-who-dreams-of-organising-everything"
            }, function() {
              return "bio";
            });
            span(function() {
              return "     ";
            });
            a({
              style: "color:steelblue;",
              href: "https://github.com/spencermountain"
            }, function() {
              return "github";
            });
            span(function() {
              return "     ";
            });
            return a({
              style: "color:steelblue;",
              href: "mailto:spencermountain@gmail.com"
            }, function() {
              return "email";
            });
          });
          a({
            style: 'color:lightgrey; text-decoration:none; margin:50px 5px 5px 5px; text-align:left; font-size:15px; ',
            href: "https://docs.google.com/presentation/d/1ytOp7Hp5m42pANx5NBeEs9NCaUuwFPIZEGlDr86vxyQ/edit?usp=sharing"
          }, function() {
            div(function() {
              return "we gave the monkeys the bananas because they were hungry";
            });
            return div(function() {
              return "we gave the monkeys the bananas because they were ripe";
            });
          });
          div({
            style: "color:grey; text-align:left;"
          }, function() {
            return "semantic web. visualisation";
          });
          return div({
            style: "color:grey; text-align:left;"
          }, function() {
            return "Toronto, Canada";
          });
        });
      });
    });
    return div({
      style: "text-align:left; margin:50px; font-size:28px;"
    }, function() {
      hacks();
      video_project({
        title: "Earthbarely",
        official: "http://earthbarely.com",
        link: "https://player.vimeo.com/video/103858377?byline=0&title=0&amp;portrait=0&amp;autoplay=0",
        headline: "a single navigation for every person and place on Earth",
        about: "mongo, freebase, famo.us.   2014"
      });
      video_project({
        title: "State",
        official: "http://state.com",
        link: "https://www.youtube.com/embed/phot9g9uuKs?rel=0&controls=0&showinfo=0",
        headline: "a self-organising language of semantic expression",
        about: "wordnet, mturk, rails.   2012"
      });
      video_project({
        title: "Nlp_compromise",
        official: "http://nlpcompromise.com",
        link: "https://player.vimeo.com/video/109880250?byline=0&title=0&amp;portrait=0&amp;autoplay=0",
        headline: "natural language processing library in the browser",
        about: "predictive modelling, node.   2014"
      });
      return video_project({
        title: "Freebase.js",
        official: "https://github.com/spencermountain/Freebase.js",
        link: "https://player.vimeo.com/video/13992710?byline=0&title=0&amp;portrait=0&amp;autoplay=0",
        headline: "complex inference on the semantic web",
        about: "mozilla ubiquity.   2010"
      });
    });
  }));
});

/*
//@ sourceMappingURL=index.map
*/
