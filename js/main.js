var SCROLLING_SPEED = 700;
var fromIndex = 1;
// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: [],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
  	responsiveWidth: 992,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'bottom',

    anchors: ['introduction','our_vision_and_mission','our_dna',
    'about_us','certifications','success_stories','our_services',
    'differentiated_offerings','value_proposition','selected_clientele',
    'case_studies','emirates_nbd',
    'gems_education','cura','aw_rostamani_group','our_global_presence']
    , //add section id's

navigationTooltips: ['Introduction','Our Vision & Mission','Our DNA',
'About Us','Certifications','Success Stories','Our Services',
'Differentiated Offerings','Value Proposition','Selected Clientele',
'Case Studies','Emirates NBD',
'GEMS Education','Cura','AW Rostamani Group','Our Global Presence'],
    
    menu: '#menu',
    scrollingSpeed: SCROLLING_SPEED,
    fitToSection: true,
    verticalCentered: false,
    lazyLoading: true,
  
    afterLoad: function(anchorLink, index) {},
  
    onLeave: function(index, nextIndex, direction) {},

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(!fromIndex){
        $('.fp-section').find('.fp-slidesContainer').fadeIn(0);
        $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
      }
    },
  
    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      fromIndex = slideIndex;
      if(!slideIndex){
          $.fn.fullpage.setScrollingSpeed(0);
          $('.fp-section').find('.fp-slidesContainer').hide();
        }
    },

  }); 

